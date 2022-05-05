import { InputSlider } from "Components/InputSlider"
import { Navigation } from "Components/Navigation"
import { calcLineDensity } from "MatrixCalculations/calcLineDensity"
import { GetServerSideProps } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import type typeP5 from "p5"
import { NGonSubdivisions } from "PolygonBuilders/nGonSubdivisions"
import React, { useEffect, useRef, useState } from "react"
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

const PlaybackContainerDiv = styled.div`
  display: grid;
  grid-template-areas:
    "hr hr hr"
    "back play forward"
    "timeline timeline timeline";
  grid-gap: 10px;
  width: 600px;
  margin: 10px auto;
`

import {
  JumpsArea,
  LayoutDiv,
  StyledP5Canvas,
  Title,
  TotalJumps,
} from "./testing.styles"

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
  console.log({
    initialVertices,
    initialPoints,
    initialSubdivisions,
    initialJumps,
  })
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
  const [jumps, setJumps] = NGonClass.current.useJumps(initialJumps ?? [])
  const [subdivisions, setSubdivisions] = NGonClass.current.useSubdivisions(
    initialSubdivisions ?? 12
  )
  const [points, setPoints] = NGonClass.current.usePoints(initialPoints ?? 30)

  const [drawMode, setDrawMode] = NGonDrawer.current.useDrawMode("overlay-draw")
  const [linesPerDraw, setLinesPerDraw] = NGonDrawer.current.useLinesPerDraw(3)
  const [speedOfDraw, setSpeedOfDraw] = NGonDrawer.current.useSpeedOfDraw(3)

  const [totalJumps, setTotalJumps] = useState(initialJumps?.length ?? 0)

  useEffect(() => {
    setJumps((previousState) => {
      if (totalJumps >= previousState.length) {
        const newJumps = [...previousState]
        const extraJumps = [...Array(totalJumps - previousState.length)].map(
          () => 1
        )
        newJumps.push(...extraJumps)
        NGonClass.current.setJumps(newJumps)
        NGonClass.current.calculateVertexMatrix()
        return newJumps
      }
      const newJumps = [...previousState].slice(0, totalJumps)

      NGonClass.current.setJumps(newJumps)
      NGonClass.current.calculateVertexMatrix()
      return newJumps
    })
  }, [totalJumps])

  const { basePath, pathname } = useRouter()
  console.log({ basePath, pathname })

  const { lineDensity, subdivisionCommonFactor, verticesCommonFactor } =
    calcLineDensity({ vertices, subdivisions, points, jumps })

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
          <Title>
            Polygon: ({vertices},{subdivisions},{points}
            {jumps.length > 0 && `,J(${jumps?.join(",")})`}) - Lines:{" "}
            {lineDensity}, VCF: {verticesCommonFactor}, SCF:{" "}
            {subdivisionCommonFactor}
          </Title>
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

          <JumpsArea>
            <TotalJumps>
              <label htmlFor="total-jumps">Total Jumps</label>
              <input
                type="number"
                id="total-jumps"
                min={1}
                onChange={({ currentTarget: { value } }) => {
                  setTotalJumps(parseInt(value) || 0)
                }}
                value={totalJumps}
              />
            </TotalJumps>
            {[...Array(totalJumps)].map((_, index) => {
              return (
                <div key={`jump-${index}`}>
                  <label htmlFor={`jump-${index}`}>Jump {index + 1}</label>
                  <input
                    type="number"
                    name=""
                    id={`jump-${index}`}
                    min="0"
                    defaultValue={jumps[index]}
                    onChange={({ currentTarget: { value } }) => {
                      setJumps((previousState) => {
                        const newJumps = [...previousState]
                        newJumps[index] = parseInt(value) || 1
                        return newJumps
                      })
                    }}
                  />
                </div>
              )
            })}
          </JumpsArea>
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
              <option value="static">Static</option>
              <option value="full-draw">full-draw</option>
              <option value="fade-draw">fade-draw</option>
              <option value="frame-draw">frame-draw</option>
              <option value="overlay-draw">overlay-draw</option>
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
          <PlaybackContainerDiv>
            <hr style={{ gridArea: "hr", width: "100%" }} />
            <button
              style={{ gridArea: "back" }}
              onClick={() => {
                NGonDrawer.current.stepBack(1)
              }}
            >
              Step Back
            </button>
            <button
              style={{ gridArea: "play" }}
              onClick={() => {
                NGonDrawer.current.togglePlay()
              }}
            >
              Pause/Play
            </button>
            <button
              style={{ gridArea: "forward" }}
              onClick={() => {
                NGonDrawer.current.stepForward(1)
              }}
            >
              Step Forward
            </button>
            <div style={{ gridArea: "timeline", display: "grid" }}>
              {NGonDrawer.current && (
                <TimeLine
                  drawingClass={
                    NGonDrawer as React.MutableRefObject<SketchNGonDrawer>
                  }
                  maxLines={lineDensity}
                />
              )}
            </div>
          </PlaybackContainerDiv>
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
        </div>
      </LayoutDiv>
    </>
  )
}

const StyledProgress = styled.progress`
  width: 50%;
  height: 10px;
  background-color: white;
  margin: 10px auto;
  border: solid 1px grey;
  border-radius: 20px;
  overflow: hidden;

  /* necessary to style the progress bar background */
  ::-webkit-progress-bar {
    background-color: white;
  }

  &::-webkit-progress-value {
    transition: width 100ms;
    background-color: #1159a6;
  }
  &::-moz-progress-bar {
    transition: padding-bottom 100ms;
    padding-left: 60px;
    padding-bottom: var(--value);
    background-color: #1159a6;
    height: 0;
    transform-origin: 0 0;
    transform: rotate(-90deg) translateX(-60px);
  }
  &::-ms-fill {
    background-color: #1159a6;
    border: 0;
  }
`

interface TimeLineProps {
  drawingClass: React.MutableRefObject<SketchNGonDrawer>
  maxLines: number
}

function TimeLine({ drawingClass, maxLines }: TimeLineProps) {
  const requestedAnimationId = useRef(0)
  const [currentFrame, setCurrentFrame] = useState(0)

  useEffect(() => {
    let previousTimestamp = 0
    function increaseProgress(timestamp: number) {
      if (timestamp - previousTimestamp > 50) {
        previousTimestamp = timestamp
        if (currentFrame !== drawingClass.current.currentLineDrawn) {
          setCurrentFrame(drawingClass.current.currentLineDrawn)
        }
      }

      requestedAnimationId.current =
        window.requestAnimationFrame(increaseProgress)
    }

    window.requestAnimationFrame(increaseProgress)

    return () => {
      cancelAnimationFrame(requestedAnimationId.current)
    }
  }, [currentFrame])

  return (
    <>
      <label htmlFor="file">Drawing progress: {currentFrame}</label>
      <StyledProgress id="file" max={maxLines - 1} value={currentFrame} />
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
