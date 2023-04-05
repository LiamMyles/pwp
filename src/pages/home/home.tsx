import { DrawingControls } from "Components/DrawingControls"
import { InputSlider } from "Components/InputSlider"
import { Navigation } from "Components/Navigation"
import { P5Canvas } from "Components/P5Canvas"
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
import { DrawMode, NGonAnimator } from "Src/sketches/nGonAnimator"
import styled from "styled-components"

const ContainerDiv = styled.div`
  display: grid;
  grid-gap: 10px;
  width: 600px;
  margin: 10px auto;
`

export const StyledP5Canvas = styled(P5Canvas)`
  margin: 10px auto;
  width: 600px;
  height: 600px;
`

const LayoutDiv = styled.div`
  display: grid;
  margin: 10px 0;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(620px, 1fr));

  @media screen and (min-width: 1250px) {
    & > *:first-child {
      justify-self: right;
    }
    & > *:last-child {
      justify-self: left;
    }
    ${StyledP5Canvas} {
      margin: 0;
    }
  }
`

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
  const NGonSubdivisionsInstance = useRef<NGonSubdivisions>(
    new NGonSubdivisions()
  )

  const NGonAnimatorInstance = useRef<NGonAnimator>(
    new NGonAnimator({
      NGon: NGonSubdivisionsInstance.current,
    })
  )

  const NGonAnimatorSketch = useRef<(p5: typeP5) => void>(
    NGonAnimatorInstance.current.initializeSketch()
  )

  const [vertices, setVertex] = NGonSubdivisionsInstance.current.useVertices(
    initialVertices ?? 4
  )

  const [subdivisions, setSubdivisions] =
    NGonSubdivisionsInstance.current.useSubdivisions(initialSubdivisions ?? 12)
  const [points, setPoints] = NGonSubdivisionsInstance.current.usePoints(
    initialPoints ?? 30
  )

  const [totalJumps, setTotalJumps] = useState(initialJumps?.length ?? 0)
  const [jumps, setJumps] = NGonSubdivisionsInstance.current.useJumps(
    initialJumps ?? []
  )

  const [drawMode, setDrawMode] = NGonAnimatorInstance.current.useDrawMode(
    NGonAnimatorInstance.current.drawMode
  )
  const [linesPerDraw, setLinesPerDraw] =
    NGonAnimatorInstance.current.useLinesPerDraw(
      NGonAnimatorInstance.current.linesPerDraw
    )
  const [durationOfDraw, setDurationOfDraw] =
    NGonAnimatorInstance.current.useDurationOfDraw(
      NGonAnimatorInstance.current.animationDurationSeconds
    )

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
        {NGonAnimatorSketch.current && (
          <StyledP5Canvas sketch={NGonAnimatorSketch.current} />
        )}
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
            NGonClass={NGonSubdivisionsInstance.current}
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
              <option value="full-draw">Fixed Count Line Drawing</option>
              <option value="fade-draw">Fixed Count Fading Line Drawing</option>
              <option value="frame-draw">Single Line Drawing</option>
              <option value="overlay-draw">
                Single Lines Overlaid Drawing
              </option>
            </select>
          </ContainerDiv>
          {drawMode !== "static" && (
            <>
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
                title="Drawing Duration (seconds)"
                min={1}
                max={10}
                setter={(value: number) => {
                  setDurationOfDraw(value)
                }}
                currentValue={durationOfDraw}
              />
              <DrawingControls NGonAnimator={NGonAnimatorInstance} />
            </>
          )}
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
                NGonAnimatorInstance.current.toggleVertices()
              }}
            >
              Toggle Vertices
            </button>
            <button
              onClick={() => {
                NGonAnimatorInstance.current.toggleSubdivisions()
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
