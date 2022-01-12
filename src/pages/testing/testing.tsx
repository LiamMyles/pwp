import { InputSlider } from "Components/InputSlider"
import { Navigation } from "Components/Navigation"
import { calcLineDensity } from "MatrixCalculations/calcLineDensity"
import { GetServerSideProps } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import type typeP5 from "p5"
import { NGonSubdivisions } from "PolygonBuilders/nGonSubdivisions"
import React, { useEffect, useRef, useState } from "react"
import { sketchGeneral } from "Src/sketches/sketchGeneral"

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
  const NGonClass = useRef<NGonSubdivisions>()
  const NGonSketch = useRef<(p5: typeP5) => void>()
  useEffect(() => {
    NGonClass.current = new NGonSubdivisions()
    NGonClass.current.setVertices(initialVertices ?? 4)
    NGonClass.current.setSubdivisions(initialSubdivisions ?? 12)
    NGonClass.current.setPoints(initialPoints ?? 30)
    NGonClass.current.setJumps(initialJumps ?? [])
    NGonClass.current.calculateVertexMatrix()

    NGonSketch.current = sketchGeneral(NGonClass.current)
  }, [initialJumps, initialPoints, initialSubdivisions, initialJumps])

  const [vertices, setVertex] = useState(initialVertices ?? 4)
  const [subdivisions, setSubdivisions] = useState(initialSubdivisions ?? 12)
  const [points, setPoints] = useState(initialPoints ?? 30)

  const [jumps, setJumps] = useState(initialJumps ?? [])
  const [totalJumps, setTotalJumps] = useState(initialJumps?.length ?? 0)

  useEffect(() => {
    setJumps((previousState) => {
      if (totalJumps >= previousState.length) {
        const newJumps = [...previousState]
        const extraJumps = [...Array(totalJumps - previousState.length)].map(
          () => 1
        )
        newJumps.push(...extraJumps)
        NGonClass.current?.setJumps(newJumps)
        NGonClass.current?.calculateVertexMatrix()
        return newJumps
      }
      const newJumps = [...previousState].slice(0, totalJumps)

      NGonClass.current?.setJumps(newJumps)
      NGonClass.current?.calculateVertexMatrix()
      return newJumps
    })
  }, [totalJumps])

  const { basePath } = useRouter()

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
              NGonClass.current?.setVertices(value)
              NGonClass.current?.calculateVertexMatrix()
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
              NGonClass.current?.setSubdivisions(value)
              NGonClass.current?.calculateVertexMatrix()
              setSubdivisions(value)
            }}
            currentValue={subdivisions}
          />
          <InputSlider
            title="Points"
            min={1}
            max={Math.floor((vertices * subdivisions) / 2)}
            setter={(value: number) => {
              NGonClass.current?.setPoints(value)
              NGonClass.current?.calculateVertexMatrix()
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
                        NGonClass.current?.setJumps(newJumps)
                        NGonClass.current?.calculateVertexMatrix()
                        return newJumps
                      })
                    }}
                  />
                </div>
              )
            })}
          </JumpsArea>
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
