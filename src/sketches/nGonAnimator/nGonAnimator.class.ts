import type typeP5 from "p5"
import type { NGonSubdivisions } from "PolygonBuilders/nGonSubdivisions"
import { useEffect, useState } from "react"

import { NGonDrawer } from "../nGonDrawer"

interface NGonAnimatorConstructor {
  NGon: NGonSubdivisions
}

export type DrawMode =
  | "static"
  | "full-draw"
  | "fade-draw"
  | "frame-draw"
  | "overlay-draw"

export class NGonAnimator extends NGonDrawer {
  drawMode: DrawMode = "static"
  timeSinceLastIncrement = 0
  currentLineDrawn = 0
  currentAnimationTick = 0
  linesPerDraw = 1
  animationDurationSeconds = 5
  totalAnimationTicks = 0
  isPlaying = true

  constructor({ NGon }: NGonAnimatorConstructor) {
    super({ NGon })
  }

  reset(): void {
    this.currentLineDrawn = 0
    this.currentAnimationTick = 0
    this.timeSinceLastIncrement = performance.now()
  }

  setLinesPerDraw(numberOfLines: number): void {
    this.linesPerDraw = numberOfLines
  }

  useLinesPerDraw(
    initialLinesPerDraw: number
  ): [number, React.Dispatch<React.SetStateAction<number>>] {
    const [linesPerDraw, setLinesPerDraw] = useState(initialLinesPerDraw)
    useEffect(() => {
      this.setLinesPerDraw(linesPerDraw)
      this.reset()
    }, [linesPerDraw])

    return [linesPerDraw, setLinesPerDraw]
  }

  setDrawMode(drawMode: DrawMode): void {
    this.reset()
    this.drawMode = drawMode
  }

  useDrawMode(
    initialDrawMode: DrawMode
  ): [DrawMode, React.Dispatch<React.SetStateAction<DrawMode>>] {
    const [drawMode, setDrawMode] = useState(initialDrawMode)
    useEffect(() => {
      this.setDrawMode(drawMode)
    }, [drawMode])

    return [drawMode, setDrawMode]
  }

  setDurationOfDraw(speed: number): void {
    this.animationDurationSeconds = speed
  }

  useDurationOfDraw(
    initialSpeedOfDraw: number
  ): [number, React.Dispatch<React.SetStateAction<number>>] {
    const [speedOfDraw, setSpeedOfDraw] = useState(initialSpeedOfDraw)
    useEffect(() => {
      this.setDurationOfDraw(speedOfDraw)
      this.reset()
    }, [speedOfDraw])

    return [speedOfDraw, setSpeedOfDraw]
  }

  drawActiveLines(p5: typeP5): void {
    this.NGon.verticesMatrix
      .slice(this.currentLineDrawn, this.currentLineDrawn + this.linesPerDraw)
      .forEach((_, count) => {
        const { x: subX, y: subY } =
          this.NGon.verticesMatrix[this.currentLineDrawn + count] ??
          this.NGon.verticesMatrix[this.NGon.verticesMatrix.length - 1]
        const { x: pointX, y: pointY } =
          this.NGon.verticesMatrix[this.currentLineDrawn + count + 1] ??
          this.NGon.verticesMatrix[0]

        p5.push()
        p5.strokeWeight(1.5)
        p5.stroke(236, 157, 88)
        p5.line(
          pointX * this.drawingSize,
          pointY * this.drawingSize,
          subX * this.drawingSize,
          subY * this.drawingSize
        )
        p5.pop()
      })
  }

  incrementDrawing(): void {
    const now = performance.now()
    const elapsedTime = now - this.timeSinceLastIncrement

    this.totalAnimationTicks = this.NGon.lineDensity / this.linesPerDraw
    const tickLength =
      (this.animationDurationSeconds / this.totalAnimationTicks) * 1000

    if (elapsedTime >= tickLength && this.isPlaying) {
      this.currentAnimationTick = this.currentAnimationTick + 1
      this.timeSinceLastIncrement = performance.now()
      this.currentLineDrawn = this.linesPerDraw + this.currentLineDrawn

      if (this.currentAnimationTick >= this.totalAnimationTicks) {
        this.currentLineDrawn = 0
        this.currentAnimationTick = 0
      }
    }
  }

  stepForward(): void {
    this.currentAnimationTick = this.currentAnimationTick + 1
    this.timeSinceLastIncrement = performance.now()
    this.currentLineDrawn = this.linesPerDraw + this.currentLineDrawn
    if (this.currentAnimationTick >= this.totalAnimationTicks) {
      this.currentLineDrawn = 0
      this.currentAnimationTick = 0
    }
  }

  stepBack(): void {
    this.currentAnimationTick = this.currentAnimationTick - 1
    this.timeSinceLastIncrement = performance.now()
    this.currentLineDrawn = this.currentLineDrawn - this.linesPerDraw

    if (this.currentLineDrawn < 0) {
      this.currentLineDrawn = 0
      this.currentAnimationTick = 0
    }
  }

  useTogglePlaying(): [boolean, () => void] {
    const [isPlaying, setIsPlaying] = useState(this.isPlaying)
    useEffect(() => {
      this.isPlaying = isPlaying
    }, [isPlaying])

    const togglePlaying = () => {
      setIsPlaying((previousState: boolean) => {
        return !previousState
      })
    }

    return [isPlaying, togglePlaying]
  }

  drawBackground(p5: typeP5): void {
    switch (this.drawMode) {
      case "static":
      case "frame-draw":
        p5.background(this.background)
        break
      case "full-draw":
        if (this.currentAnimationTick === 0) {
          p5.background(this.background)
        }
        break
      case "fade-draw":
        p5.background(this.background, 10)
        break
      case "overlay-draw":
        p5.background(this.background)
        this.drawNGon(p5)
        break
    }
  }

  drawLoop(p5: typeP5): void {
    this.drawBackground(p5)

    switch (this.drawMode) {
      case "static":
        this.drawNGon(p5)
        break
      case "full-draw":
      case "fade-draw":
      case "frame-draw":
      case "overlay-draw":
        this.drawActiveLines(p5)
        this.incrementDrawing()
        break
    }
  }
}
