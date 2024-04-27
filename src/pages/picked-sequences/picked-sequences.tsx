import { Navigation } from "Components/Navigation"
import { P5Canvas } from "Components/P5Canvas"
import Head from "next/head"
import type typeP5 from "p5"
import React, { useRef } from "react"
import { NGonSubdivisionsSequence } from "Src/polygonBuilders/nGonSubdivisionsSequence"
import { NGonDrawer } from "Src/sketches/nGonDrawer"
import styled from "styled-components"

export const StyledP5Canvas = styled(P5Canvas)`
  width: 300px;
  height: 300px;
`

const LayoutDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

interface OptionsJson {
  nGon: [number, number, number[], { start: number; end: number }]
  styles: {
    background: string
    lineStyle: {
      strokeColour: string
      strokeWeight: number
    }
  }
}

const sequenceOptions: OptionsJson[] = [
  {
    nGon: [10, 40, [3], { start: 9, end: 300 }],
    styles: {
      background: "black",
      lineStyle: { strokeColour: "#EFA00B", strokeWeight: 0.2 },
    },
  },
  {
    nGon: [8, 44, [2, 3, 2], { start: 10, end: 300 }],
    styles: {
      background: "black",
      lineStyle: { strokeColour: "#FF006E", strokeWeight: 0.1 },
    },
  },
  {
    nGon: [
      11,
      11,
      [1, 1, 2, 3, 5, 8, 2, 10, 1, 11, 1],
      { start: 30, end: 300 },
    ],
    styles: {
      background: "black",
      lineStyle: { strokeColour: "#D65108", strokeWeight: 0.1 },
    },
  },
  {
    nGon: [18, 19, [1, 2, 3, 4, 5, 6], { start: 50, end: 1000 }],
    styles: {
      background: "black",
      lineStyle: { strokeColour: "#0075C4", strokeWeight: 0.1 },
    },
  },
  {
    nGon: [13, 17, [1, 9], { start: 30, end: 300 }],
    styles: {
      background: "black",
      lineStyle: { strokeColour: "#FF006E", strokeWeight: 0.1 },
    },
  },
  {
    nGon: [12, 20, [1, 8], { start: 17, end: 300 }],
    styles: {
      background: "black",
      lineStyle: { strokeColour: "#05F140", strokeWeight: 0.1 },
    },
  },
  {
    nGon: [14, 19, [9], { start: 9, end: 300 }],
    styles: {
      background: "black",
      lineStyle: { strokeColour: "#0D2149", strokeWeight: 0.6 },
    },
  },
  {
    nGon: [14, 13, [4, 3, 2, 1, 14, 13, 12], { start: 9, end: 300 }],
    styles: {
      background: "black",
      lineStyle: { strokeColour: "#A4031F", strokeWeight: 0.4 },
    },
  },
  {
    nGon: [13, 17, [4, 12], { start: 9, end: 400 }],
    styles: {
      background: "black",
      lineStyle: { strokeColour: "#357266", strokeWeight: 0.1 },
    },
  },
  {
    nGon: [14, 43, [1, 2, 3, 5, 8, 13], { start: 5, end: 600 }],
    styles: {
      background: "black",
      lineStyle: { strokeColour: "#610345", strokeWeight: 0.2 },
    },
  },
  {
    nGon: [14, 43, [13, 8, 5, 3, 8, 13], { start: 61, end: 1000 }],
    styles: {
      background: "black",
      lineStyle: { strokeColour: "#5F0A87", strokeWeight: 0.1 },
    },
  },
  {
    nGon: [5, 17, [13, 8, 5, 3, 8, 13], { start: 37, end: 137 }],
    styles: {
      background: "black",
      lineStyle: { strokeColour: "#357266", strokeWeight: 0.5 },
    },
  },
  {
    nGon: [30, 30, [10, 15, 10], { start: 11, end: 500 }],
    styles: {
      background: "black",
      lineStyle: { strokeColour: "#FF006E", strokeWeight: 0.1 },
    },
  },
  {
    nGon: [12, 41, [7, 1, 1, 7], { start: 11, end: 492 }],
    styles: {
      background: "black",
      lineStyle: { strokeColour: "#5F0A87", strokeWeight: 0.1 },
    },
  },
  {
    nGon: [28, 41, [18, 38, 38, 11], { start: 11, end: 656 }],
    styles: {
      background: "black",
      lineStyle: { strokeColour: "#357266", strokeWeight: 0.2 },
    },
  },
]

export function PickedSequences(): React.ReactElement {
  return (
    <>
      <Head>
        <title>Playing With Polygons</title>
        <meta
          name="description"
          content="Maths, Polygons and Adventures to be had"
        />
        <link rel="icon" href={`/favicon.ico`} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
          integrity="sha512-NmLkDIU1C/C88wi324HBc+S2kLhi08PN5GDeUVVVC/BVt/9Izdsc9SVeVfA1UZbY3sHUlDSyRXhCzHfr6hmPPw=="
          crossOrigin="anonymous"
        />
      </Head>

      <Navigation />

      <div
        style={{
          display: "flex",
          margin: "10px",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        Click to Play
      </div>
      <LayoutDiv>
        {sequenceOptions.map((options, index) => {
          return <MiniSequence options={options} key={index} />
        })}
      </LayoutDiv>
    </>
  )
}

function MiniSequence({ options }: { options: OptionsJson }) {
  const NGonClass = useRef<NGonSubdivisionsSequence>(
    new NGonSubdivisionsSequence(...options.nGon)
  )
  const NGonDrawerSketch = useRef<NGonDrawer>(
    new NGonDrawer({
      NGon: NGonClass.current,
      mini: true,
      background: options.styles.background,
      lineStyle: options.styles.lineStyle,
    })
  )
  const NGonSketch = useRef<(p5: typeP5) => void>(
    NGonDrawerSketch.current.initializeSketch()
  )
  const pressedPlay = useRef(false)
  return (
    <button
      style={{
        margin: "0",
        background: "none",
        padding: "0",
        border: "none",
      }}
      onClick={() => {
        if (pressedPlay.current === false) {
          NGonClass.current.animateSequence()
          pressedPlay.current = true
        } else {
          NGonClass.current.playAnimation = !NGonClass.current.playAnimation
          NGonClass.current.animateSequence()
        }
      }}
    >
      {NGonSketch.current && <StyledP5Canvas sketch={NGonSketch.current} />}
    </button>
  )
}
