import { calcLineDensity } from "MatrixCalculations/calcLineDensity"
import type typeP5 from "p5"
import type { NGonSubdivisions } from "PolygonBuilders/nGonSubdivisions"

const sketchGeneralOptions = {
  slowDraw: false,
  speed: 4,
  size: 250,
}

interface SketchNGonDrawerConstructor {
  NGon: NGonSubdivisions
}

export type DrawMode =
  | "static"
  | "full-draw"
  | "fade-draw"
  | "frame-draw"
  | "overlay-draw"

export class SketchNGonDrawer {
  NGon: NGonSubdivisions
  currentLineDrawn = 0
  drawMode: DrawMode = "overlay-draw"
  drawFinishDelay = 2000
  pauseDrawing = false
  linesPerDraw = 3
  speed = 3
  background = 220
  shouldResetDrawing = false

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

  setLinesPerDraw(numberOfLines: number): void {
    this.linesPerDraw = numberOfLines
  }

  setSpeedOfDraw(speed: number): void {
    this.speed = speed
  }

  initializeSketch(): (p5: typeP5) => void {
    return (p5: typeP5) => {
      p5.setup = () => {
        p5.createCanvas(600, 600)

        p5.background(this.background)
      }

      p5.draw = () => {
        p5.frameRate(this.speed)
        const lineDensity = calcLineDensity({
          vertices: this.NGon.verticesAmount,
          subdivisions: this.NGon.subdivisions,
          points: this.NGon.points,
          jumps: this.NGon.jumps,
        }).lineDensity

        p5.angleMode(p5.DEGREES)
        p5.translate(p5.width / 2, p5.height / 2)
        p5.scale(1, -1)

        if (this.shouldResetDrawing === true) {
          p5.background(this.background)
          this.shouldResetDrawing = false
        }

        if (this.drawMode === "static" || this.drawMode === "overlay-draw") {
          p5.background(this.background)
          this.NGon.verticesMatrix.slice(0, lineDensity).forEach((_, count) => {
            const { x: subX, y: subY } = this.NGon.verticesMatrix[count]
              ? this.NGon.verticesMatrix[count]
              : this.NGon.verticesMatrix[this.NGon.verticesMatrix.length - 1]
            const { x: pointX, y: pointY } = this.NGon.verticesMatrix[count + 1]
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

        // Background before Draw
        switch (this.drawMode) {
          case "fade-draw":
            p5.background(this.background, 100)
            break
          case "frame-draw":
            p5.background(this.background)
            break
        }

        if (this.drawMode !== "static") {
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

          if (this.pauseDrawing === false) {
            this.currentLineDrawn++
          }
          if (
            this.currentLineDrawn >= lineDensity ||
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
      }
    }
  }
}
