import "@reach/slider/styles.css"

import { Slider } from "@reach/slider"
import { P5Canvas } from "Components/P5Canvas"
import Head from "next/head"
import { useEffect, useRef, useState } from "react"
import { GlobalValues } from "Src/globals"
import { sketch } from "Src/sketch"
import styled from "styled-components"

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

const StyledSlider = styled(StyledWrapperDiv)`
  grid-template-columns: 1fr 130px;
  & label {
    display: inline-block;
    margin-bottom: 5px;
  }
  & input {
    width: calc(100% - 10px);
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

export function Home(): React.ReactElement {
  const [vertex, setVertex] = useState(GlobalValues.vertices)
  const [subdivisions, setSubdivisions] = useState(GlobalValues.subdivisions)
  const [points, setPoints] = useState(GlobalValues.points)
  const [showSubdivisions, setShowSubdivisions] = useState(
    GlobalValues.showSubdivisions
  )
  const [showVertices, setShowVertices] = useState(GlobalValues.showVertices)
  const [jumps, setJumps] = useState(GlobalValues.jumps)
  const [totalJumps, setTotalJumps] = useState(0)
  const [shouldSlowDraw, setShouldSlowDraw] = useState(GlobalValues.slowDraw)

  const globalValues = useRef(GlobalValues)

  useEffect(() => {
    setJumps((previousState) => {
      if (jumps.length < totalJumps) {
        return [...Array(totalJumps)].map(() => 1)
      } else {
        const newState = [...previousState]
        return newState.slice(0, totalJumps - 1)
      }
    })
  }, [totalJumps])

  useEffect(() => {
    globalValues.current.vertices = vertex
    globalValues.current.subdivisions = subdivisions
    globalValues.current.points = points
    globalValues.current.showSubdivisions = showSubdivisions
    globalValues.current.showVertices = showVertices
    globalValues.current.jumps = jumps
    globalValues.current.slowDraw = shouldSlowDraw
  }, [
    vertex,
    subdivisions,
    points,
    showSubdivisions,
    showVertices,
    jumps,
    shouldSlowDraw,
  ])

  return (
    <>
      <Head>
        <title>Playing With Polygons</title>
        <meta
          name="description"
          content="Maths, Polygons and Adventures to be had"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
          integrity="sha512-NmLkDIU1C/C88wi324HBc+S2kLhi08PN5GDeUVVVC/BVt/9Izdsc9SVeVfA1UZbY3sHUlDSyRXhCzHfr6hmPPw=="
          crossOrigin="anonymous"
        />
      </Head>
      <StyledP5Canvas sketch={sketch} />
      <StyledSlider>
        <div>
          <label htmlFor="vertex-number-slider">Vertex Slider</label>
          <Slider
            min={1}
            max={20}
            id="vertex-number-slider"
            onChange={(value) => setVertex(value)}
            value={vertex}
          />
        </div>
        <div>
          <label htmlFor="vertex-number-input">Vertex Input</label>
          <input
            type="number"
            id="vertex-number-input"
            min={1}
            onChange={({ currentTarget: { value } }) => {
              setVertex(parseInt(value) || 1)
            }}
            value={vertex}
          />
        </div>
      </StyledSlider>
      <StyledSlider>
        <div>
          <label htmlFor="subdivision-number-slider">Subdivision Slider</label>
          <Slider
            min={1}
            max={1000}
            id="subdivision-number-slider"
            onChange={(value) => setSubdivisions(value)}
            value={subdivisions}
          />
        </div>
        <div>
          <label htmlFor="subdivision-number-input">Subdivision Input</label>

          <input
            type="number"
            id="subdivision-number-input"
            min={1}
            onChange={({ currentTarget: { value } }) => {
              setSubdivisions(parseInt(value) || 1)
            }}
            value={subdivisions}
          />
        </div>
      </StyledSlider>
      <StyledSlider>
        <div>
          <label htmlFor="points-number-slider">Points Slider</label>
          <Slider
            min={1}
            id="points-number-slider"
            onChange={(value) => setPoints(value)}
            value={points}
          />
        </div>
        <div>
          <label htmlFor="points-number-input">Points Input</label>
          <input
            type="number"
            id="points-number-input"
            min={1}
            onChange={({ currentTarget: { value } }) => {
              setPoints(parseInt(value) || 1)
            }}
            value={points}
          />
        </div>
      </StyledSlider>
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
                defaultValue={1}
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
      <StyledWrapperDiv>
        <p>List of vertices:</p>
        <pre>
          <code>
            {globalValues.current.matrix.map((cords, index) => {
              return `${index} - X:${cords.x.toFixed(3)}, Y:${cords.y.toFixed(
                3
              )}, 
`
            })}
          </code>
        </pre>
      </StyledWrapperDiv>
    </>
  )
}
