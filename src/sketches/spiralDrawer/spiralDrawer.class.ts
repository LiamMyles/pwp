import type typeP5 from "p5"
import type { NGonSpirals } from "PolygonBuilders/nGonSpirals"

interface SpiralDrawerConstructor {
  spiral: NGonSpirals
}

export class SpiralDrawer {
  spiral: NGonSpirals
  background = 220
  showVertices = false
  showSubdivisions = false
  size = 250

  constructor({ spiral }: SpiralDrawerConstructor) {
    this.spiral = spiral
  }

  toggleVertices(): void {
    this.showVertices = !this.showVertices
  }
  toggleSubdivisions(): void {
    this.showSubdivisions = !this.showSubdivisions
  }

  alignDrawing(p5: typeP5): void {
    p5.angleMode(p5.DEGREES)
    p5.translate(p5.width / 2, p5.height / 2)
    p5.rotate(180)
  }

  drawVertices(p5: typeP5): void {
    this.spiral.initialMatrix.forEach(({ x, y }, index) => {
      p5.push()
      if (index === 0) {
        p5.stroke("blue")
      } else {
        p5.stroke("green")
      }
      p5.strokeWeight(20)
      p5.point(x * this.size, y * this.size)
      p5.pop()
      if (this.spiral.initialMatrix.length <= 100) {
        p5.push()
        p5.translate(x * this.size, y * this.size)
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

  drawSpiral(p5: typeP5): void {
    this.spiral.verticesMatrix.forEach((_, count) => {
      const { x: subX, y: subY } = this.spiral.verticesMatrix[count]
        ? this.spiral.verticesMatrix[count]
        : this.spiral.verticesMatrix[this.spiral.verticesMatrix.length - 1]
      const nextPoint = this.spiral.verticesMatrix[count + 1]
      if (nextPoint) {
        const { x: pointX, y: pointY } = nextPoint

        p5.push()
        p5.strokeWeight(0.2)
        p5.line(
          pointX * this.size,
          pointY * this.size,
          subX * this.size,
          subY * this.size
        )
        p5.pop()
      }
    })
  }

  drawLoop(p5: typeP5): void {
    p5.background(this.background)

    this.drawSpiral(p5)
  }

  initializeSketch(): (p5: typeP5) => void {
    return (p5: typeP5) => {
      p5.setup = () => {
        p5.createCanvas(600, 600)
        p5.background(this.background)
      }

      p5.draw = () => {
        p5.frameRate(24)

        this.alignDrawing(p5)
        this.drawLoop(p5)

        if (this.showVertices) {
          this.drawVertices(p5)
        }
      }
    }
  }
}
