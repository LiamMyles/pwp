import { calcLineDensity } from "MatrixCalculations/calcLineDensity"
import type typeP5 from "p5"
import type { NGonSubdivisions } from "PolygonBuilders/nGonSubdivisions"

const sketchGeneralOptions = {
  slowDraw: false,
  speed: 20,
  size: 250,
}

export function sketchGeneral(NGon: NGonSubdivisions): (p5: typeP5) => void {
  return function (p5: typeP5) {
    p5.setup = () => {
      p5.createCanvas(600, 600)

      p5.background(220)
      p5.frameRate(sketchGeneralOptions.speed)
    }

    p5.draw = () => {
      const lineDensity = calcLineDensity({
        vertices: NGon.verticesAmount,
        subdivisions: NGon.subdivisions,
        points: NGon.points,
        jumps: NGon.jumps,
      }).lineDensity

      p5.angleMode(p5.DEGREES)
      p5.translate(p5.width / 2, p5.height / 2)
      p5.scale(1, -1)

      p5.frameRate(sketchGeneralOptions.speed)
      p5.background(220)
      NGon.verticesMatrix.slice(0, lineDensity).forEach((_, count) => {
        p5.push()
        const { x: subX, y: subY } = NGon.verticesMatrix[count]
          ? NGon.verticesMatrix[count]
          : NGon.verticesMatrix[NGon.verticesMatrix.length - 1]
        const { x: pointX, y: pointY } = NGon.verticesMatrix[count + 1]
          ? NGon.verticesMatrix[count + 1]
          : NGon.verticesMatrix[0]
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
}
