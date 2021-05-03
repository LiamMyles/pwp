import React, { useState, useEffect } from "react"
import { P5Canvas } from "./components/P5Canvas"
import { sketch } from "./sketch"
import styled from "styled-components"
import { Slider } from "@reach/slider"
import "@reach/slider/styles.css"
import { GlobalValues } from "./globals"

const StyledP5Canvas = styled(P5Canvas)`
  margin: 10px auto;
  width: 600px;
`

const StyledWrapperDiv = styled.div`
  display: grid;
  grid-gap: 10px;
  max-width: 600px;
  margin: 10px auto;
  h1 {
    font-size: xx-large;
  }
  p {
    font-size: large;
  }
`

interface AppProps {}

function App({}: AppProps) {
  const [vertex, setVertex] = useState(GlobalValues.vertices)
  const [subdivisions, setSubdivisions] = useState(GlobalValues.subdivisions)
  const [points, setPoints] = useState(GlobalValues.points)

  useEffect(() => {
    GlobalValues.vertices = vertex
    GlobalValues.subdivisions = subdivisions
    GlobalValues.points = points
  }, [vertex, subdivisions, points])

  return (
    <>
      <StyledP5Canvas sketch={sketch} />
      <StyledWrapperDiv>
        <label htmlFor="vertex-number-slider">Vertex Slider</label>
        <Slider
          min={1}
          max={20}
          id="vertex-number-slider"
          onChange={(value) => setVertex(value)}
          value={vertex}
        />
        <label htmlFor="vertex-number-input">Vertex Input</label>
        <input
          type="number"
          id="vertex-number-input"
          min={1}
          max={20}
          onChange={({ currentTarget: { value } }) => {
            setVertex(parseInt(value))
          }}
          value={vertex}
        />
        <label htmlFor="subdivision-number-slider">Subdivision Slider</label>
        <Slider
          min={1}
          max={1000}
          id="subdivision-number-slider"
          onChange={(value) => setSubdivisions(value)}
          value={subdivisions}
        />
        <label htmlFor="subdivision-number-input">Subdivision Input</label>
        <input
          type="number"
          id="subdivision-number-input"
          min={1}
          max={1000}
          onChange={({ currentTarget: { value } }) => {
            setSubdivisions(parseInt(value))
          }}
          value={subdivisions}
        />
        <label htmlFor="points-number-slider">Points Slider</label>
        <Slider
          min={1}
          max={1000}
          id="points-number-slider"
          onChange={(value) => setPoints(value)}
          value={points}
        />
        <label htmlFor="points-number-input">Points Input</label>
        <input
          type="number"
          id="points-number-input"
          min={1}
          max={1000}
          onChange={({ currentTarget: { value } }) => {
            setPoints(parseInt(value))
          }}
          value={points}
        />
        <h1>Notes</h1>
        <p>
          Purple Dots are all the subdivisions, Green dots are all the vertices.
        </p>
        <p>These are the currently preset vertices:</p>
        <pre>
          <code>
            {`
{ x: 0, y: 0 },
{ x: 0, y: 1 },
{ x: 1, y: 1 },
{ x: 1, y: 0 },
{ x: 0.25, y: 0.25 },
{ x: 0.25, y: 0.75 },
{ x: 0.75, y: 0.75 },
{ x: 0.75, y: 0.25 },`}
          </code>
        </pre>
      </StyledWrapperDiv>
    </>
  )
}

export default App
