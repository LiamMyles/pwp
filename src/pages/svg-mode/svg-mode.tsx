import { InputSlider } from "Components/InputSlider"
import { Navigation } from "Components/Navigation"
import { P5Canvas } from "Components/P5Canvas"
import { PolygonJumps } from "Components/PolygonJumps"
import { PolygonMetaTitle } from "Components/PolygonMetaTitle"
import { GetServerSideProps } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import type { Vertices } from "PolygonBuilders/n-gon.types"
import { NGonSubdivisions } from "PolygonBuilders/nGonSubdivisions"
import React, { useRef, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard"
import { getUrl } from "Src/helpers/getUrl"
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

export const StyledSVG = styled.div`
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

function generateSVGFromPoints(points: Vertices[], scale = 300): string {
  const svgHeader = `<svg width="${scale * 2}" height="${scale * 2}" viewBox="${
    scale * -1
  } ${scale * -1} ${scale * 2} ${
    scale * 2
  }" xmlns="http://www.w3.org/2000/svg">`
  const svgFooter = `</svg>`

  const scaledPoints = points
    .map((p) => `${p.x * scale},${-p.y * scale}`) // Flip Y for SVG coordinate system
    .join(" ")

  const polygon = `<polygon points="${scaledPoints}" fill="none" stroke="black" stroke-width="0.1" />`

  return `${svgHeader}\n  ${polygon}\n${svgFooter}`
}

export function SvgMode({
  initialVertices,
  initialPoints,
  initialSubdivisions,
  initialJumps,
}: Props): React.ReactElement {
  const NGonSubdivisionsInstance = useRef<NGonSubdivisions>(
    new NGonSubdivisions()
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

  const { basePath, pathname } = useRouter()

  const generatedSvg = generateSVGFromPoints(
    NGonSubdivisionsInstance.current.verticesMatrix
  )

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
        <StyledSVG>
          <div
            dangerouslySetInnerHTML={{
              __html: generatedSvg,
            }}
          ></div>
        </StyledSVG>

        <div>
          <PolygonMetaTitle
            vertices={vertices}
            subdivisions={subdivisions}
            points={points}
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
                // Create a Blob from the SVG string
                const blob = new Blob([generatedSvg], {
                  type: "image/svg+xml;charset=utf-8",
                })

                // Create a temporary anchor element
                const link = document.createElement("a")
                link.href = URL.createObjectURL(blob)
                link.download = `(${vertices},${subdivisions},${points}${
                  jumps.length > 0 ? `,J(${jumps?.join(",")})` : ""
                })`

                // Trigger the download
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
            >
              Download Svg
            </button>
          </div>
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
