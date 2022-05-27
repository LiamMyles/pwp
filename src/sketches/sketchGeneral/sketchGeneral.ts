import { calcLineDensity } from "MatrixCalculations/calcLineDensity"
import type typeP5 from "p5"
import { NGonSpirals } from "PolygonBuilders/nGonSpirals"
import { NGonSubdivisions } from "PolygonBuilders/nGonSubdivisions"
import { useEffect, useState } from "react"

const sketchGeneralOptions = {
  slowDraw: false,
  speed: 4,
  size: 250,
}

interface SketchNGonDrawerConstructor {
  NGon: NGonSubdivisions | NGonSpirals
}

export type DrawMode =
  | "static"
  | "full-draw"
  | "fade-draw"
  | "frame-draw"
  | "overlay-draw"

export class SketchNGonDrawer {
  NGon: NGonSubdivisions | NGonSpirals
  currentLineDrawn = 0
  drawMode: DrawMode = "overlay-draw"
  drawFinishDelay = 2000
  playDrawing = true
  linesPerDraw = 3
  speed = 3
  background = 220
  shouldResetDrawing = false
  lineDensity = 0
  showVertices = false
  showSubdivisions = false

  constructor({ NGon }: SketchNGonDrawerConstructor) {
    this.NGon = NGon
  }

  resetDrawing(): void {
    this.currentLineDrawn = 0
    this.shouldResetDrawing = true
  }

  setDrawMode(drawMode: DrawMode): void {
    this.resetDrawing()
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

  setLinesPerDraw(numberOfLines: number): void {
    this.linesPerDraw = numberOfLines
  }

  useLinesPerDraw(
    initialLinesPerDraw: number
  ): [number, React.Dispatch<React.SetStateAction<number>>] {
    const [linesPerDraw, setLinesPerDraw] = useState(initialLinesPerDraw)
    useEffect(() => {
      this.setLinesPerDraw(linesPerDraw)
    }, [linesPerDraw])

    return [linesPerDraw, setLinesPerDraw]
  }

  setSpeedOfDraw(speed: number): void {
    this.speed = speed
  }

  useSpeedOfDraw(
    initialSpeedOfDraw: number
  ): [number, React.Dispatch<React.SetStateAction<number>>] {
    const [speedOfDraw, setSpeedOfDraw] = useState(initialSpeedOfDraw)
    useEffect(() => {
      this.setSpeedOfDraw(speedOfDraw)
    }, [speedOfDraw])

    return [speedOfDraw, setSpeedOfDraw]
  }

  togglePlay(): void {
    this.playDrawing = !this.playDrawing
  }

  toggleVertices(): void {
    this.showVertices = !this.showVertices
  }
  toggleSubdivisions(): void {
    this.showSubdivisions = !this.showSubdivisions
  }

  stepBack(count: number): void {
    const expectedNewCount = this.currentLineDrawn - count

    if (expectedNewCount < 0) {
      this.currentLineDrawn = this.lineDensity + expectedNewCount
    } else {
      this.currentLineDrawn = expectedNewCount
    }
  }

  stepForward(count: number): void {
    const expectedNewCount = this.currentLineDrawn + count
    if (expectedNewCount === this.lineDensity) {
      this.currentLineDrawn = 0
    } else if (expectedNewCount > this.lineDensity) {
      this.currentLineDrawn = expectedNewCount - this.lineDensity
    } else {
      this.currentLineDrawn = expectedNewCount
    }
  }

  initializeSketch(): (p5: typeP5) => void {
    return (p5: typeP5) => {
      p5.setup = () => {
        p5.createCanvas(600, 600)

        p5.background(this.background)
      }

      p5.draw = () => {
        this.NGon.calculateVertexMatrix()
        p5.frameRate(this.speed)

        if (this.NGon instanceof NGonSpirals) {
          this.lineDensity = this.NGon.verticesMatrix.length
        }
        if (this.NGon instanceof NGonSubdivisions) {
          this.lineDensity = calcLineDensity({
            vertices: this.NGon.verticesAmount,
            subdivisions: this.NGon.subdivisions,
            points: this.NGon.points,
            jumps: this.NGon.jumps,
          }).lineDensity
        }

        p5.angleMode(p5.DEGREES)
        p5.translate(p5.width / 2, p5.height / 2)
        p5.rotate(180)

        if (this.shouldResetDrawing === true) {
          p5.background(this.background)
          this.shouldResetDrawing = false
        }

        if (this.drawMode === "static" || this.drawMode === "overlay-draw") {
          p5.background(this.background)

          if (this.NGon instanceof NGonSpirals) {
            this.NGon.verticesMatrix.forEach((_, count) => {
              const { x: subX, y: subY } = this.NGon.verticesMatrix[count]
                ? this.NGon.verticesMatrix[count]
                : this.NGon.verticesMatrix[this.NGon.verticesMatrix.length - 1]
              const nextPoint = this.NGon.verticesMatrix[count + 1]
              if (nextPoint) {
                const { x: pointX, y: pointY } = nextPoint

                p5.push()
                p5.strokeWeight(0.2)
                p5.line(
                  pointX * sketchGeneralOptions.size,
                  pointY * sketchGeneralOptions.size,
                  subX * sketchGeneralOptions.size,
                  subY * sketchGeneralOptions.size
                )
                p5.pop()
              }
            })
          }
          if (this.NGon instanceof NGonSubdivisions) {
            this.NGon.verticesMatrix
              .slice(0, this.lineDensity)
              .forEach((_, count) => {
                const { x: subX, y: subY } = this.NGon.verticesMatrix[count]
                  ? this.NGon.verticesMatrix[count]
                  : this.NGon.verticesMatrix[
                      this.NGon.verticesMatrix.length - 1
                    ]
                const { x: pointX, y: pointY } = this.NGon.verticesMatrix[
                  count + 1
                ]
                  ? this.NGon.verticesMatrix[count + 1]
                  : this.NGon.verticesMatrix[0]

                p5.push()
                p5.strokeWeight(0.2)
                p5.line(
                  pointX * sketchGeneralOptions.size,
                  pointY * sketchGeneralOptions.size,
                  subX * sketchGeneralOptions.size,
                  subY * sketchGeneralOptions.size
                )
                p5.pop()
              })
          }
        }

        // Background before Draw
        switch (this.drawMode) {
          case "fade-draw":
            p5.background(this.background, 10)
            break
          case "frame-draw":
            p5.background(this.background)
            break
        }

        if (this.drawMode !== "static") {
          if (this.NGon instanceof NGonSpirals) {
            this.NGon.verticesMatrix
              .slice(
                this.currentLineDrawn,
                this.currentLineDrawn + this.linesPerDraw
              )
              .forEach((_, count) => {
                const { x: subX, y: subY } =
                  this.NGon.verticesMatrix[this.currentLineDrawn + count] ??
                  this.NGon.verticesMatrix[this.NGon.verticesMatrix.length - 1]

                const nextPoint =
                  this.NGon.verticesMatrix[this.currentLineDrawn + count + 1]
                if (nextPoint) {
                  const { x: pointX, y: pointY } = nextPoint

                  p5.push()
                  p5.strokeWeight(1.5)
                  p5.stroke(236, 157, 88)
                  p5.line(
                    pointX * sketchGeneralOptions.size,
                    pointY * sketchGeneralOptions.size,
                    subX * sketchGeneralOptions.size,
                    subY * sketchGeneralOptions.size
                  )
                  p5.pop()
                }
              })
          }
          if (this.NGon instanceof NGonSubdivisions) {
            this.NGon.verticesMatrix
              .slice(
                this.currentLineDrawn,
                this.currentLineDrawn + this.linesPerDraw
              )
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
                  pointX * sketchGeneralOptions.size,
                  pointY * sketchGeneralOptions.size,
                  subX * sketchGeneralOptions.size,
                  subY * sketchGeneralOptions.size
                )
                p5.pop()
              })
          }

          if (this.playDrawing) {
            switch (this.drawMode) {
              case "fade-draw":
              case "full-draw":
                this.currentLineDrawn =
                  this.linesPerDraw + this.currentLineDrawn
                break
              default:
                this.currentLineDrawn++
                break
            }
          }
          if (
            this.currentLineDrawn >= this.lineDensity ||
            this.currentLineDrawn >= this.NGon.verticesMatrix.length
          ) {
            p5.frameRate(0)
            this.currentLineDrawn = 0
            if (
              this.drawMode === "full-draw" ||
              this.drawMode === "fade-draw"
            ) {
              setTimeout(() => {
                p5.background(220)
                p5.frameRate(sketchGeneralOptions.speed)
              }, this.drawFinishDelay)
            } else {
              p5.frameRate(sketchGeneralOptions.speed)
            }
          }
        }
        if (this.showSubdivisions && this.NGon instanceof NGonSubdivisions) {
          this.NGon.subdivisionMatrix.forEach(({ x, y }) => {
            p5.push()
            p5.stroke("purple")
            p5.strokeWeight(5)
            p5.point(
              x * sketchGeneralOptions.size,
              y * sketchGeneralOptions.size
            )
            p5.pop()
          })
        }

        if (this.showVertices) {
          this.NGon.initialMatrix.forEach(({ x, y }, index) => {
            p5.push()
            if (index === 0) {
              p5.stroke("blue")
            } else {
              p5.stroke("green")
            }
            p5.strokeWeight(20)
            p5.point(
              x * sketchGeneralOptions.size,
              y * sketchGeneralOptions.size
            )
            p5.pop()
            if (this.NGon.initialMatrix.length <= 100) {
              p5.push()
              p5.translate(
                x * sketchGeneralOptions.size,
                y * sketchGeneralOptions.size
              )
              p5.rotate(-180)
              p5.strokeWeight(1)

              p5.fill("white")
              p5.textAlign(p5.CENTER)
              p5.textSize(15)
              p5.text(index, 0, 5)

              p5.pop()
            }
          })
        }
      }
    }
  }
}
