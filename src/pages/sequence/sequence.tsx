import { InputSlider } from "Components/InputSlider"
import { Navigation } from "Components/Navigation"
import { P5Canvas } from "Components/P5Canvas"
import { PolygonJumps } from "Components/PolygonJumps"
import { PolygonMetaTitle } from "Components/PolygonMetaTitle"
import { GetServerSideProps } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import type typeP5 from "p5"
import React, { useRef, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard"
import { getUrl } from "Src/helpers/getUrl"
import { NGonSubdivisionsSequence } from "Src/polygonBuilders/nGonSubdivisionsSequence"
import { NGonDrawer } from "Src/sketches/nGonDrawer"
import styled from "styled-components"

export const StyledP5Canvas = styled(P5Canvas)`
  margin: 10px auto;
  width: 600px;
  height: 600px;
`

const ContainerDiv = styled.div`
  display: grid;
  grid-gap: 10px;
  width: 600px;
  margin: 10px auto;
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

export function Sequence({
  initialVertices,
  initialPoints,
  initialSubdivisions,
  initialJumps,
}: Props): React.ReactElement {
  const NGonClass = useRef<NGonSubdivisionsSequence>(
    new NGonSubdivisionsSequence()
  )
  const NGonDrawerSketch = useRef<NGonDrawer>(
    new NGonDrawer({
      NGon: NGonClass.current,
    })
  )
  const NGonSketch = useRef<(p5: typeP5) => void>(
    NGonDrawerSketch.current.initializeSketch()
  )

  const [vertices, setVertex] = NGonClass.current.useVertices(
    initialVertices ?? 12
  )

  const [subdivisions, setSubdivisions] = NGonClass.current.useSubdivisions(
    initialSubdivisions ?? 41
  )
  const [points, setPoints] = NGonClass.current.usePoints(initialPoints ?? 1)
  const listenOnlyPoints = NGonClass.current.usePointsLister()

  const [totalJumps, setTotalJumps] = useState(initialJumps?.length ?? 1)
  const [jumps, setJumps] = NGonClass.current.useJumps(initialJumps ?? [5])

  const [speedMs, setSpeedMs] = NGonClass.current.useSpeedMs(100)

  const [isPlaying, setIsPlaying] = useState<boolean>(false)

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
        <div>
          {NGonSketch.current && <StyledP5Canvas sketch={NGonSketch.current} />}
        </div>
        <div>
          <PolygonMetaTitle
            vertices={vertices}
            subdivisions={subdivisions}
            points={listenOnlyPoints}
            jumps={jumps}
          />
          <div
            style={{ display: "flex", gap: "10px", margin: "auto", width: 600 }}
          >
            <button
              style={{
                width: "max-content",
                textAlign: "center",
                justifySelf: "start",
              }}
              onClick={() => {
                if (isPlaying) {
                  NGonClass.current.playAnimation = false
                  setIsPlaying(false)
                } else {
                  NGonClass.current.playAnimation = true
                  NGonClass.current.animateSequence()
                  setIsPlaying(true)
                }
              }}
            >
              {isPlaying ? "Stop Sequence" : "Play Sequence"}
            </button>
          </div>
          <InputSlider
            title="Speed (lower is faster)"
            min={1}
            max={200}
            setter={(value: number) => {
              setSpeedMs(value)
            }}
            currentValue={speedMs}
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
            title="Start Points"
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
