import { getJumpedPoints } from "Calculations/getJumpedPoints"
import { getNGonVertices } from "Calculations/getNGonVertices"
import { getSpiral } from "Calculations/getSpiral"
import type typeP5 from "p5"

import { GlobalValues } from "./globals"

let speed = 20
const size = 250

export function sketch(p5: typeP5): void {
  p5.setup = () => {
    p5.createCanvas(600, 600)

    p5.background(220)
    p5.frameRate(speed)
  }

  let slowDrawCount = 0
  let previousDrawState = false
  p5.draw = () => {
    if (previousDrawState !== GlobalValues.slowDraw) {
      p5.background(220)
      previousDrawState = GlobalValues.slowDraw
    }
    p5.angleMode(p5.DEGREES)
    p5.translate(p5.width / 2, p5.height / 2)
    p5.scale(1, -1)

    const initialMatrix = getNGonVertices(GlobalValues.vertices)
    const jumpedMatrix = getJumpedPoints(initialMatrix, ...GlobalValues.jumps)

    const spiralStart = getSpiral(
      jumpedMatrix,
      GlobalValues.reduction,
      GlobalValues.showMirror
    )

    GlobalValues.matrix = spiralStart

    const vertexToDraw = spiralStart

    speed = GlobalValues.reduction / 2

    if (GlobalValues.slowDraw) {
      p5.push()
      if (vertexToDraw.length !== slowDrawCount + 1) {
        const { x: subX, y: subY } = vertexToDraw[slowDrawCount]
          ? vertexToDraw[slowDrawCount]
          : vertexToDraw[vertexToDraw.length - 1]
        const { x: pointX, y: pointY } = vertexToDraw[slowDrawCount + 1]
          ? vertexToDraw[slowDrawCount + 1]
          : vertexToDraw[0]
        p5.strokeWeight(0.5)
        p5.line(pointX * size, pointY * size, subX * size, subY * size)
        p5.pop()
      }
      slowDrawCount++
      if (slowDrawCount >= vertexToDraw.length) {
        p5.frameRate(0)
        slowDrawCount = 0
        setTimeout(() => {
          p5.background(220)
          p5.frameRate(speed)
        }, 2000)
      }
    } else {
      p5.frameRate(speed)
      p5.background(220)
      vertexToDraw.forEach((_, count) => {
        if (vertexToDraw.length !== count + 1) {
          p5.push()
          const { x: subX, y: subY } = vertexToDraw[count]
            ? vertexToDraw[count]
            : vertexToDraw[vertexToDraw.length - 1]
          const { x: pointX, y: pointY } = vertexToDraw[count + 1]
            ? vertexToDraw[count + 1]
            : vertexToDraw[0]
          p5.strokeWeight(0.2)
          p5.line(pointX * size, pointY * size, subX * size, subY * size)
          p5.pop()
        }
      })
    }

    if (GlobalValues.showVertices) {
      initialMatrix.forEach(({ x, y }, index) => {
        p5.push()
        if (index === 0) {
          p5.stroke("blue")
        } else {
          p5.stroke("green")
        }
        p5.strokeWeight(15)
        p5.point(x * size, y * size)
        p5.pop()
      })
    }
  }
}
