import type typeP5 from "p5"

import { GlobalValues } from "./globals"
import { getSubdivisionMatrix, getPointsMatrix, getInitialPoints } from "./pwp"

const speed = 12

export const sketch = (p5: typeP5) => {
  p5.setup = () => {
    p5.createCanvas(600, 600)

    p5.background(220)
    p5.frameRate(speed)
  }

  // let count = 0
  p5.draw = () => {
    p5.background(220)
    p5.angleMode(p5.DEGREES)
    p5.translate(p5.width / 2, p5.height / 2)
    p5.scale(1, -1)

    const matrix = getInitialPoints(GlobalValues.vertices, 250)

    const subdivisionMatrix = getSubdivisionMatrix(
      GlobalValues.subdivisions,
      matrix,
      GlobalValues.vertices
    )
    const pointsMatrix = getPointsMatrix(
      GlobalValues.vertices,
      GlobalValues.subdivisions,
      GlobalValues.points,
      subdivisionMatrix
    )

    matrix.forEach(({ x, y }) => {
      p5.push()
      p5.stroke("green")
      p5.strokeWeight(15)
      p5.point(x, y)
      p5.pop()
    })
    subdivisionMatrix.forEach(({ x, y }) => {
      p5.push()
      p5.stroke("purple")
      p5.strokeWeight(10)
      p5.point(x, y)
      p5.pop()
    })

    pointsMatrix.forEach((_, count) => {
      p5.push()
      const { x: subX, y: subY } = pointsMatrix[count]
        ? pointsMatrix[count]
        : pointsMatrix[pointsMatrix.length - 1]
      const { x: pointX, y: pointY } = pointsMatrix[count + 1]
        ? pointsMatrix[count + 1]
        : pointsMatrix[0]
      p5.strokeWeight(0.2)
      p5.line(pointX, pointY, subX, subY)
      p5.pop()
    })
  }
}
