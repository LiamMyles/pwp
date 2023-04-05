import { Navigation } from "Components/Navigation"
import { P5Canvas } from "Components/P5Canvas"
import { calcLineDensity } from "MatrixCalculations/calcLineDensity"
import Head from "next/head"
import { useRouter } from "next/router"
import type typeP5 from "p5"
import { NGonSubdivisions } from "PolygonBuilders/nGonSubdivisions"
import React, { useEffect, useRef, useState } from "react"
import { NGonDrawer } from "Src/sketches/nGonDrawer"
import styled from "styled-components"

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

const nGonSynced = (
  obj: NGonSubdivisions,
  vert2: number,
  sub: number,
  points: number
) => {
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      if (
        obj.verticesAmount === vert2 &&
        obj.subdivisions === sub &&
        obj.points === points
      ) {
        clearInterval(interval)
        resolve(1)
      } else {
        console.log("failed")
      }
    }, 1)
  })
}

export function Sequence({
  initialVertices,
  initialPoints,
  initialSubdivisions,
  initialJumps,
}: Props): React.ReactElement {
  const [drawCount, setDrawCount] = useState(0)

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

  const { lineDensity } = calcLineDensity({
    vertices,
    subdivisions,
    points,
    jumps,
  })

  // useEffect(() => {
  //   setLinesPerDraw(Math.ceil(lineDensity / 100))
  //   setSpeedOfDraw(24)
  // }, [lineDensity])

  // useEffect(() => {
  //   const array = [
  //     { vert: 29, sub: 28, points: 346, jumps: [5, 6, 10] },
  //     { vert: 30, sub: 28, points: 346 },
  //     { vert: 40, sub: 28, points: 346 },
  //     { vert: 50, sub: 28, points: 346 },
  //   ]
  //   const object = array[drawCount % array.length]
  //   console.log(object)
  //   if (drawCount !== 0 && object === undefined) {
  //     NGonDrawer.current.togglePlay()
  //   }

  //   if (drawCount !== 0 && object !== undefined) {
  //     setVertex(object.vert)
  //     setSubdivisions(object.sub)
  //     setPoints(object.points)
  //     if (object.jumps) {
  //       setTotalJumps(object.jumps.length)
  //       setJumps(object.jumps)
  //     } else {
  //       setTotalJumps(0)
  //       setJumps([])
  //     }
  //   }
  // }, [drawCount])

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
      <button
        onClick={() => {
          console.log(drawCount)
        }}
      >
        Hello
      </button>
      <LayoutDiv>
        {NGonSketch.current && <StyledP5Canvas sketch={NGonSketch.current} />}
      </LayoutDiv>
    </>
  )
}
