import { DrawingControls } from "Components/DrawingControls"
import { InputSlider } from "Components/InputSlider"
import { Navigation } from "Components/Navigation"
import { P5Canvas } from "Components/P5Canvas"
import { PolygonJumps } from "Components/PolygonJumps"
import { GetServerSideProps } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import type typeP5 from "p5"
import React, { useRef, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard"
import { getUrl } from "Src/helpers/getUrl"
import { NGonSpirals } from "Src/polygonBuilders/nGonSpirals"
import { DrawMode, SketchNGonDrawer } from "Src/sketches/sketchGeneral"
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
const TitleH1 = styled.h1`
  font-size: 20px;
  width: 600px;
  margin: 5px auto;
  padding: 0 0 10px;
  border-bottom: solid grey 2px;
`

interface Props {
  initialVertices: number | null
  initialSubdivisions: number | null
  initialPoints: number | null
  initialJumps: number[] | null
  initialReduction: number | null
}

export function Spirals({
  initialVertices,
  initialJumps,
  initialReduction,
}: Props): React.ReactElement {
  const [lineDensity, setLineDensity] = useState(0)
  console.log(lineDensity)
  const NGonClass = useRef<NGonSpirals>(new NGonSpirals({ setLineDensity }))
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
  const [reduction, setReduction] = NGonClass.current.useReduction(
    initialReduction ?? 12
  )
  const setShowMirror = NGonClass.current.useShowMirror(false)[1]

  const [totalJumps, setTotalJumps] = useState(initialJumps?.length ?? 0)
  const [jumps, setJumps] = NGonClass.current.useJumps(initialJumps ?? [])

  const [drawMode, setDrawMode] = NGonDrawer.current.useDrawMode("static")
  const [linesPerDraw, setLinesPerDraw] = NGonDrawer.current.useLinesPerDraw(3)
  const [speedOfDraw, setSpeedOfDraw] = NGonDrawer.current.useSpeedOfDraw(3)

  const { basePath, pathname } = useRouter()

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
          <TitleH1>
            Spirals: (N:{vertices}, R:{reduction}
            {jumps.length > 0 && `,J(${jumps?.join(",")})`})
          </TitleH1>
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
            title="Reductions"
            setter={(value: number) => {
              setReduction(value)
            }}
            min={1}
            max={400}
            currentValue={reduction}
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
              <option value="full-draw">Fixed Count Line Drawing</option>
              <option value="fade-draw">Fixed Count Fading Line Drawing</option>
              <option value="frame-draw">Single Line Drawing</option>
              <option value="overlay-draw">SingleLines Overlaid Drawing</option>
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
                jumps,
                reduction,
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
          </ContainerDiv>
          <ContainerDiv>
            <button
              onClick={() => {
                setShowMirror((previousState) => {
                  return !previousState
                })
              }}
            >
              Toggle Show Mirror
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
  const { vertex, subdivisions, points, jumps, reduction } = context.query

  return {
    props: {
      initialVertices: validateToNumber(vertex),
      initialSubdivisions: validateToNumber(subdivisions),
      initialPoints: validateToNumber(points),
      initialJumps: validateToNumberArray(jumps),
      initialReduction: validateToNumber(reduction),
    },
  }
}
