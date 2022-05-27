import { DrawingControls } from "Components/DrawingControls"
import { InputSlider } from "Components/InputSlider"
import { Navigation } from "Components/Navigation"
import { PolygonJumps } from "Components/PolygonJumps"
import { PolygonMetaTitle } from "Components/PolygonMetaTitle"
import { calcLineDensity } from "MatrixCalculations/calcLineDensity"
import { GetServerSideProps } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import type typeP5 from "p5"
import { NGonSubdivisions } from "PolygonBuilders/nGonSubdivisions"
import React, { useRef, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard"
import { getUrl } from "Src/helpers/getUrl"
import { DrawMode, SketchNGonDrawer } from "Src/sketches/sketchGeneral"
import styled from "styled-components"

const ContainerDiv = styled.div`
  display: grid;
  grid-gap: 10px;
  width: 600px;
  margin: 10px auto;
`

import { LayoutDiv, StyledP5Canvas } from "./testing.styles"

interface Props {
  initialVertices: number | null
  initialSubdivisions: number | null
  initialPoints: number | null
  initialJumps: number[] | null
}

export function Home({
  initialVertices,
  initialPoints,
  initialSubdivisions,
  initialJumps,
}: Props): React.ReactElement {
  const NGonClass = useRef<NGonSubdivisions>(new NGonSubdivisions())
  const NGonDrawer = useRef<SketchNGonDrawer>(
    new SketchNGonDrawer({
      NGon: NGonClass.current,
    })
  )
  const NGonSketch = useRef<(p5: typeP5) => void>(
    NGonDrawer.current.initializeSketch()
  )

  const [vertices, setVertex] = NGonClass.current.useVertices(
    initialVertices ?? 4
  )

  const [subdivisions, setSubdivisions] = NGonClass.current.useSubdivisions(
    initialSubdivisions ?? 12
  )
  const [points, setPoints] = NGonClass.current.usePoints(initialPoints ?? 30)

  const [totalJumps, setTotalJumps] = useState(initialJumps?.length ?? 0)
  const [jumps, setJumps] = NGonClass.current.useJumps(initialJumps ?? [])

  const [drawMode, setDrawMode] = NGonDrawer.current.useDrawMode("static")
  const [linesPerDraw, setLinesPerDraw] = NGonDrawer.current.useLinesPerDraw(3)
  const [speedOfDraw, setSpeedOfDraw] = NGonDrawer.current.useSpeedOfDraw(3)

  const { basePath, pathname } = useRouter()

  const { lineDensity } = calcLineDensity({
    vertices,
    subdivisions,
    points,
    jumps,
  })

  return (
    <>
      <Head>
        <title>Playing With Polygons</title>
        <meta
          name="description"
          content="Maths, Polygons and Adventures to be had"
        />
        <link rel="icon" href={`${basePath}/favicon.ico`} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
          integrity="sha512-NmLkDIU1C/C88wi324HBc+S2kLhi08PN5GDeUVVVC/BVt/9Izdsc9SVeVfA1UZbY3sHUlDSyRXhCzHfr6hmPPw=="
          crossOrigin="anonymous"
        />
      </Head>

      <Navigation />
      <LayoutDiv>
        {NGonSketch.current && <StyledP5Canvas sketch={NGonSketch.current} />}
        <div>
          <PolygonMetaTitle
            vertices={vertices}
            subdivisions={subdivisions}
            points={points}
            jumps={jumps}
          />
          <InputSlider
            title="N-Gon"
            setter={(value: number) => {
              setVertex(value)
            }}
            min={1}
            max={36}
            currentValue={vertices}
          />
          <InputSlider
            title="Subdivision"
            min={1}
            max={50}
            setter={(value: number) => {
              setSubdivisions(value)
            }}
            currentValue={subdivisions}
          />
          <InputSlider
            title="Points"
            min={1}
            max={Math.floor((vertices * subdivisions) / 2)}
            setter={(value: number) => {
              setPoints(value)
            }}
            currentValue={points}
          />

          <PolygonJumps
            NGonClass={NGonClass.current}
            totalJumps={totalJumps}
            setTotalJumps={setTotalJumps}
            setJumps={setJumps}
            jumps={jumps}
          />
          <ContainerDiv>
            <label htmlFor="draw-mode">Drawing Mode</label>
            <select
              name="draw-mode"
              id="draw-mode"
              defaultValue={drawMode}
              onChange={({ currentTarget: { value } }) => {
                const drawMode = value as DrawMode
                setDrawMode(drawMode)
              }}
            >
              <option value="static">No Drawing</option>
              <option value="full-draw">Line Drawing</option>
              <option value="fade-draw">Fading Lines Drawing</option>
              <option value="frame-draw">Fixed Lines Drawing</option>
              <option value="overlay-draw">Fixed Lines Overlaid Drawing</option>
            </select>
          </ContainerDiv>

          <InputSlider
            title="Drawn Lines"
            min={1}
            max={lineDensity}
            setter={(value: number) => {
              setLinesPerDraw(value)
            }}
            currentValue={linesPerDraw}
          />

          <InputSlider
            title="Drawing Speed"
            min={1}
            max={lineDensity < 60 ? lineDensity : 60}
            setter={(value: number) => {
              setSpeedOfDraw(value)
            }}
            currentValue={speedOfDraw}
          />
          <DrawingControls NGonDrawer={NGonDrawer} lineDensity={lineDensity} />
          <ContainerDiv>
            <CopyToClipboard
              text={getUrl({
                path: `${basePath}${pathname}`,
                vertices,
                subdivisions,
                points,
                jumps,
              })}
            >
              <button>Copy Link To Shape</button>
            </CopyToClipboard>
          </ContainerDiv>
          <ContainerDiv>
            <button
              onClick={() => {
                NGonDrawer.current.toggleVertices()
              }}
            >
              Toggle Vertices
            </button>
            <button
              onClick={() => {
                NGonDrawer.current.toggleSubdivisions()
              }}
            >
              Toggle Subdivisions
            </button>
          </ContainerDiv>
        </div>
      </LayoutDiv>
    </>
  )
}

function validateToNumber(value: string | string[] | undefined): number | null {
  if (typeof value === "string") {
    if (!isNaN(parseInt(value))) {
      return parseInt(value) ?? null
    }
  }
  return null
}

function validateToNumberArray(
  value: string | string[] | undefined
): number[] | null {
  if (Array.isArray(value)) {
    const result = value
      .map(validateToNumber)
      .filter(
        (numberOrUndefined): numberOrUndefined is number =>
          numberOrUndefined !== null
      )
    return result
  } else if (typeof value === "string") {
    const validValue = validateToNumber(value)
    if (validValue !== null) {
      return [validValue]
    }
  }

  return null
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { vertex, subdivisions, points, jumps } = context.query

  return {
    props: {
      initialVertices: validateToNumber(vertex),
      initialSubdivisions: validateToNumber(subdivisions),
      initialPoints: validateToNumber(points),
      initialJumps: validateToNumberArray(jumps),
    },
  }
}
