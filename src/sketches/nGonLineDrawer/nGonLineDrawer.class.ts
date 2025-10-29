import type typeP5 from "p5"
import type { NGonToLines } from "PolygonBuilders/nGonToLines"

interface NGonDrawerConstructor {
  NGon: NGonToLines
  mini?: boolean
  background?: string
  lineStyle?: {
    strokeColour: string
    strokeWeight: number
  }
}

export class NGonLineDrawer {
  NGon: NGonToLines
  background = "#eeeeee"
  showVertices = false
  showSubdivisions = false
  drawingSize = 250
  canvasSize = 600
  lineStyle = {
    strokeColour: "black",
    strokeWeight: 0.2,
  }

  constructor({ NGon, mini, background, lineStyle }: NGonDrawerConstructor) {
    this.NGon = NGon
    if (mini) {
      this.drawingSize = 140
      this.canvasSize = 300
    }
    if (background) {
      this.background = background
    }
    if (lineStyle) {
      this.lineStyle = lineStyle
    }
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

  drawSubdivisions(p5: typeP5): void {
    this.NGon.subdivisionMatrix.forEach(({ x, y }) => {
      p5.push()
      p5.stroke("purple")
      p5.strokeWeight(5)
      p5.point(x * this.drawingSize, y * this.drawingSize)
      p5.pop()
    })
  }

  drawVertices(p5: typeP5): void {
    this.NGon.initialMatrix.forEach(({ x, y }, index) => {
      p5.push()
      if (index === 0) {
        p5.stroke("blue")
      } else {
        p5.stroke("green")
      }
      p5.strokeWeight(20)
      p5.point(x * this.drawingSize, y * this.drawingSize)
      p5.pop()
      if (this.NGon.initialMatrix.length <= 100) {
        p5.push()
        p5.translate(x * this.drawingSize, y * this.drawingSize)
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

  drawLines(p5: typeP5): void {
    if (this.NGon.verticesPairsMatrix.length === 0) {
      return
    }

    this.NGon.arrayListJ.forEach((line) => {
      const { x: subX, y: subY } = line[0]
      const { x: pointX, y: pointY } = line[1]

      p5.push()
      p5.strokeWeight(1)
      p5.stroke("red")
      p5.line(
        pointX * this.drawingSize,
        pointY * this.drawingSize,
        subX * this.drawingSize,
        subY * this.drawingSize
      )
      p5.pop()
    })
    this.NGon.arrayListK.forEach((line) => {
      const { x: subX, y: subY } = line[0]
      const { x: pointX, y: pointY } = line[1]

      p5.push()
      p5.strokeWeight(1)
      p5.stroke("blue")
      p5.line(
        pointX * this.drawingSize,
        pointY * this.drawingSize,
        subX * this.drawingSize,
        subY * this.drawingSize
      )
      p5.pop()
    })
    this.NGon.arrayListVW.forEach((line) => {
      const { x: subX, y: subY } = line[0]
      const { x: pointX, y: pointY } = line[1]

      p5.push()
      p5.strokeWeight(1)
      p5.stroke("green")
      p5.line(
        pointX * this.drawingSize,
        pointY * this.drawingSize,
        subX * this.drawingSize,
        subY * this.drawingSize
      )
      p5.pop()
    })
  }

  drawLoop(p5: typeP5): void {
    p5.background(this.background)

    this.drawLines(p5)
  }

  initializeSketch(): (p5: typeP5) => void {
    return (p5: typeP5) => {
      p5.setup = () => {
        p5.createCanvas(this.canvasSize, this.canvasSize)
        p5.background(this.background)
      }

      p5.draw = () => {
        p5.frameRate(24)

        this.alignDrawing(p5)
        this.drawLoop(p5)

        if (this.showSubdivisions) {
          this.drawSubdivisions(p5)
        }

        if (this.showVertices) {
          this.drawVertices(p5)
        }
      }
    }
  }
}
