import React, { useState, useEffect, useRef } from "react"
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
  const [matrix, setMatrix] = useState(GlobalValues.matrix)
  const [showSubdivisions, setShowSubdivisions] = useState(
    GlobalValues.showSubdivisions
  )
  const [showVertices, setShowVertices] = useState(GlobalValues.showVertices)
  const [jumps, setJumps] = useState(GlobalValues.jumps)
  const [shouldSlowDraw, setShouldSlowDraw] = useState(GlobalValues.slowDraw)

  const hackTimeoutId = useRef(0)

  useEffect(() => {
    GlobalValues.vertices = vertex
    GlobalValues.subdivisions = subdivisions
    GlobalValues.points = points
    GlobalValues.showSubdivisions = showSubdivisions
    GlobalValues.showVertices = showVertices
    GlobalValues.jumps = jumps
    GlobalValues.slowDraw = shouldSlowDraw
  }, [
    vertex,
    subdivisions,
    points,
    showSubdivisions,
    showVertices,
    jumps,
    shouldSlowDraw,
  ])

  useEffect(() => {
    hackTimeoutId.current = setTimeout(() => {
      setMatrix(GlobalValues.matrix)
    }, 250)
    return () => {
      clearTimeout(hackTimeoutId.current)
    }
  }, [GlobalValues.matrix, setMatrix])

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
      </StyledWrapperDiv>
      <StyledWrapperDiv>
        <input
          type="checkbox"
          id="toggle-subdivisions"
          value={`${showSubdivisions}`}
          onChange={({ currentTarget: { checked } }) => {
            setShowSubdivisions(checked)
          }}
        />
        <label htmlFor="toggle-subdivisions">Toggle Subdivisions</label>
        <input
          type="checkbox"
          id="toggle-vertices"
          value={`${showVertices}`}
          onChange={({ currentTarget: { checked } }) => {
            setShowVertices(checked)
          }}
        />
        <label htmlFor="toggle-vertices">Toggle Vertices</label>
        <input
          type="checkbox"
          id="toggle-slow-draw"
          value={`${shouldSlowDraw}`}
          onChange={({ currentTarget: { checked } }) => {
            setShouldSlowDraw(checked)
          }}
        />
        <label htmlFor="toggle-slow-draw">Toggle Drawing</label>
      </StyledWrapperDiv>
      <StyledWrapperDiv>
        <button
          onClick={() => {
            setJumps((previousState) => {
              return [...previousState, 0]
            })
          }}
        >
          Add Jump
        </button>
        <button
          onClick={() => {
            setJumps((previousState) => {
              const newState = [...previousState]
              newState.pop()
              return newState
            })
          }}
        >
          Remove Jump
        </button>

        {jumps.map((jump, index) => {
          return (
            <React.Fragment key={`${jump}-${index}`}>
              <input
                type="number"
                name=""
                id=""
                value={jump}
                onChange={({ currentTarget: { value } }) => {
                  setJumps((previousState) => {
                    const newState = [...previousState]
                    newState[index] = parseInt(value)
                    return newState
                  })
                }}
              />
            </React.Fragment>
          )
        })}
      </StyledWrapperDiv>
      <StyledWrapperDiv>
        <p>List of vertices:</p>
        <pre>
          <code>
            {matrix.map((cords) => {
              return `${JSON.stringify(cords)}
`
            })}
          </code>
        </pre>
      </StyledWrapperDiv>
    </>
  )
}

export default App
