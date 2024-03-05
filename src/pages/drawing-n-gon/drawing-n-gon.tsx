import { InputSlider } from "Components/InputSlider"
import { Navigation } from "Components/Navigation"
import { P5Canvas } from "Components/P5Canvas"
import { PolygonJumps } from "Components/PolygonJumps"
import { PolygonMetaTitle } from "Components/PolygonMetaTitle"
import { GetServerSideProps } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import type typeP5 from "p5"
import { NGonSubdivisions } from "PolygonBuilders/nGonSubdivisions"
import React, { useRef, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard"
import { getUrl } from "Src/helpers/getUrl"
import { NGonDrawer } from "Src/sketches/nGonDrawer"
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

export function DrawingNGon({
  initialVertices,
  initialPoints,
  initialSubdivisions,
  initialJumps,
}: Props): React.ReactElement {
  const NGonClass = useRef<NGonSubdivisions>(new NGonSubdivisions())
  const NGonDrawerSketch = useRef<NGonDrawer>(
    new NGonDrawer({
      NGon: NGonClass.current,
    })
  )
  const NGonSketch = useRef<(p5: typeP5) => void>(
    NGonDrawerSketch.current.initializeSketch()
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
                NGonDrawerSketch.current.toggleVertices()
              }}
            >
              Toggle Vertices
            </button>
            <button
              onClick={() => {
                NGonDrawerSketch.current.toggleSubdivisions()
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
