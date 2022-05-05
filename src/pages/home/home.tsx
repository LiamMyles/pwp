import { InputSlider } from "Components/InputSlider"
import { Navigation } from "Components/Navigation"
import { P5Canvas } from "Components/P5Canvas"
import { calcLineDensity } from "MatrixCalculations/calcLineDensity"
import { GetServerSideProps } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import React, { useEffect, useRef, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard"
import { GlobalValues } from "Src/globals"
import { sketch } from "Src/sketch"
import styled from "styled-components"

interface Props {
  initialVertices: number | null
  initialSubdivisions: number | null
  initialPoints: number | null
  initialJumps: number[] | null
}

const StyledP5Canvas = styled(P5Canvas)`
  margin: 10px auto;
  width: 600px;
  height: 600px;
`

const StyledWrapperDiv = styled.div`
  display: grid;
  grid-gap: 10px;
  width: 600px;
  margin: 10px auto;
  h1 {
    font-size: xx-large;
  }
  p {
    font-size: large;
  }
`

const ToggleBox = styled.div`
  margin: 10px 0;
`
const ToggleArea = styled(StyledWrapperDiv)`
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  margin: 10px auto;
  border-top: solid grey 2px;
  border-bottom: solid grey 2px;
`
const JumpsArea = styled(StyledWrapperDiv)`
  grid-template-columns: repeat(5, 1fr);
  border-bottom: solid grey 2px;
  padding: 10px 0;
  & label {
    display: inline-block;
    margin-bottom: 5px;
  }

  & input {
    width: calc(100% - 10px);
  }
`
const TotalJumps = styled.div`
  grid-column: 1/6;
  display: grid;
`
const Title = styled.h1`
  font-size: 20px;
  width: 600px;
  margin: 5px auto;
  padding: 0 0 10px;
  border-bottom: solid grey 2px;
`
const CopyWrapper = styled(StyledWrapperDiv)`
  & button {
    padding: 10px;
    background: #e0e0e0;
    border: 2px solid grey;
    border-radius: 5px;
    &:focus,
    &:hover {
      box-shadow: 0px 0 3px 0 #3167ff;
    }
  }
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

export function Home({
  initialVertices,
  initialPoints,
  initialSubdivisions,
  initialJumps,
}: Props): React.ReactElement {
  const [vertices, setVertex] = useState(
    initialVertices ?? GlobalValues.vertices
  )
  const [subdivisions, setSubdivisions] = useState(
    initialSubdivisions ?? GlobalValues.subdivisions
  )
  const [points, setPoints] = useState(initialPoints ?? GlobalValues.points)
  const [showSubdivisions, setShowSubdivisions] = useState(
    GlobalValues.showSubdivisions
  )
  const [showVertices, setShowVertices] = useState(GlobalValues.showVertices)
  const [jumps, setJumps] = useState(initialJumps ?? GlobalValues.jumps)
  const [totalJumps, setTotalJumps] = useState(initialJumps?.length ?? 0)
  const [shouldSlowDraw, setShouldSlowDraw] = useState(GlobalValues.slowDraw)
  const [generatedLink, setGeneratedLink] = useState("")
  const globalValues = useRef(GlobalValues)

  useEffect(() => {
    setJumps((previousState) => {
      if (totalJumps >= previousState.length) {
        const newArray = [...previousState]
        const extraJumps = [...Array(totalJumps - previousState.length)].map(
          () => 1
        )
        newArray.push(...extraJumps)
        return newArray
      }
      return [...previousState].slice(0, totalJumps)
    })
  }, [totalJumps])

  useEffect(() => {
    globalValues.current.vertices = vertices
    globalValues.current.subdivisions = subdivisions
    globalValues.current.points = points
    globalValues.current.showSubdivisions = showSubdivisions
    globalValues.current.showVertices = showVertices
    globalValues.current.jumps = jumps
    globalValues.current.slowDraw = shouldSlowDraw
    setGeneratedLink(
      `${
        window?.location.origin
      }${basePath}?vertex=${vertices}&subdivisions=${subdivisions}&points=${points}${
        totalJumps !== 0 ? `&jumps=${jumps.join("&jumps=")}` : ""
      }`
    )
  }, [
    vertices,
    subdivisions,
    points,
    showSubdivisions,
    showVertices,
    jumps,
    shouldSlowDraw,
  ])

  const { basePath } = useRouter()
  console.log(basePath)

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
        <StyledP5Canvas sketch={sketch} />
        <div>
          <Title>
            Polygon: ({vertices},{subdivisions},{points}
            {jumps.length > 0 && `,J(${jumps?.join(",")})`}) - Lines:{" "}
            {lineDensity}, VCF: {verticesCommonFactor}, SCF:{" "}
            {subdivisionCommonFactor}
          </Title>
          <InputSlider
            title="N-Gon"
            setter={setVertex}
            min={1}
            max={36}
            currentValue={vertices}
          />
          <InputSlider
            title="Subdivision"
            min={1}
            max={50}
            setter={setSubdivisions}
            currentValue={subdivisions}
          />
          <InputSlider
            title="Points"
            min={1}
            max={Math.floor((vertices * subdivisions) / 2)}
            setter={setPoints}
            currentValue={points}
          />
          <ToggleArea>
            <ToggleBox>
              <input
                type="checkbox"
                id="toggle-subdivisions"
                value={`${showSubdivisions}`}
                onChange={({ currentTarget: { checked } }) => {
                  setShowSubdivisions(checked)
                }}
              />
              <label htmlFor="toggle-subdivisions">Toggle Subdivisions</label>
            </ToggleBox>
            <ToggleBox>
              <input
                type="checkbox"
                id="toggle-vertices"
                value={`${showVertices}`}
                onChange={({ currentTarget: { checked } }) => {
                  setShowVertices(checked)
                }}
              />
              <label htmlFor="toggle-vertices">Toggle Vertices</label>
            </ToggleBox>
            <ToggleBox>
              <input
                type="checkbox"
                id="toggle-slow-draw"
                value={`${shouldSlowDraw}`}
                onChange={({ currentTarget: { checked } }) => {
                  setShouldSlowDraw(checked)
                }}
              />
              <label htmlFor="toggle-slow-draw">Toggle Drawing</label>
            </ToggleBox>
          </ToggleArea>
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
                    defaultValue={jumps[index]}
                    onChange={({ currentTarget: { value } }) => {
                      setJumps((previousState) => {
                        const newState = [...previousState]
                        newState[index] = parseInt(value) || 1
                        return newState
                      })
                    }}
                  />
                </div>
              )
            })}
          </JumpsArea>
          <CopyWrapper>
            <CopyToClipboard text={generatedLink}>
              <button type="button">Copy link To Shape</button>
            </CopyToClipboard>
          </CopyWrapper>
          {/* <StyledWrapperDiv>
            <p>List of vertices:</p>
            <pre>
              <code>
                {globalValues.current.matrix.map((cords, index) => {
                  return `${index} - X:${cords.x.toFixed(
                    3
                  )}, Y:${cords.y.toFixed(3)}, 
`
                })}
              </code>
            </pre>
          </StyledWrapperDiv> */}
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
