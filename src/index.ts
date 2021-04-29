import p5 from "p5"
import type typeP5 from "p5"

interface verticesMatrix {
  x: number
  y: number
}

const GlobalValues = {
  vertices: 3,
  subdivisions: 45,
  points: 82,
}

const vertexRange = <HTMLInputElement>document.getElementById("vertex-count")
const vertexValue = <HTMLElement>document.getElementById("vertex-value")

const subdivisionsRange = <HTMLInputElement>(
  document.getElementById("subdivisions-count")
)
const subdivisionsValue = <HTMLElement>(
  document.getElementById("subdivisions-value")
)
const pointsRange = <HTMLInputElement>document.getElementById("points-count")
const pointsValue = <HTMLElement>document.getElementById("points-value")

vertexRange.addEventListener("input", () => {
  const value = vertexRange.value
  GlobalValues.vertices = parseInt(vertexRange.value)
  vertexValue.innerHTML = value
})
subdivisionsRange.addEventListener("input", () => {
  const value = subdivisionsRange.value
  GlobalValues.subdivisions = parseInt(value)
  subdivisionsValue.innerHTML = value
})
pointsRange.addEventListener("input", () => {
  const value = pointsRange.value
  GlobalValues.points = parseInt(value)
  pointsValue.innerHTML = value
})

vertexRange.value = GlobalValues.vertices.toString()
vertexValue.innerHTML = GlobalValues.vertices.toString()
subdivisionsRange.value = GlobalValues.subdivisions.toString()
subdivisionsValue.innerHTML = GlobalValues.subdivisions.toString()
pointsRange.value = GlobalValues.points.toString()
pointsValue.innerHTML = GlobalValues.points.toString()

const initialMatrix = [
  { x: 0, y: 0 },
  { x: 0, y: 1 },
  { x: 1, y: 1 },
  { x: 1, y: 0 },
  { x: 0.25, y: 0.25 },
  { x: 0.25, y: 0.75 },
  { x: 0.75, y: 0.75 },
  { x: 0.75, y: 0.25 },
]

const speed = 12

const size = 580

function getSubdivisionMatrix(
  subdivisions: number,
  matrix: verticesMatrix[]
): verticesMatrix[] {
  return matrix
    .slice(0, GlobalValues.vertices)
    .map((_, index, passedMatrix) => {
      const startY = passedMatrix[index].y
      const endY = passedMatrix[index + 1]
        ? passedMatrix[index + 1].y
        : passedMatrix[0].y
      const startX = passedMatrix[index].x
      const endX = passedMatrix[index + 1]
        ? passedMatrix[index + 1].x
        : passedMatrix[0].x

      return [...Array(subdivisions)].map((_, index) => {
        const partOfSubdivision = index
        const y =
          (1 - partOfSubdivision / subdivisions) * startY +
          (partOfSubdivision / subdivisions) * endY

        const x =
          (1 - partOfSubdivision / subdivisions) * startX +
          (partOfSubdivision / subdivisions) * endX

        return { x, y }
      })
    })
    .flat()
}

function getPointsMatrix(
  vertices: number,
  subdivisions: number,
  points: number,
  subdivisionMatrix: verticesMatrix[]
) {
  const totalPoints = vertices * subdivisions
  return [...Array(totalPoints)].map((_, index) => {
    return subdivisionMatrix[(index * points) % totalPoints]
  })
}

const sketch = (p5: typeP5) => {
  p5.setup = () => {
    p5.createCanvas(600, 600)

    p5.background(220)
    p5.frameRate(speed)
  }

  // let count = 0
  p5.draw = () => {
    p5.background(220)
    p5.angleMode(p5.DEGREES)
    p5.translate(10, p5.height - 10)
    p5.scale(1, -1)

    const subdivisionMatrix = getSubdivisionMatrix(
      GlobalValues.subdivisions,
      initialMatrix
    )
    const pointsMatrix = getPointsMatrix(
      GlobalValues.vertices,
      GlobalValues.subdivisions,
      GlobalValues.points,
      subdivisionMatrix
    )

    initialMatrix.forEach(({ x, y }) => {
      p5.push()
      p5.stroke("green")
      p5.strokeWeight(15)
      p5.point(x * size, y * size)
      p5.pop()
    })
    subdivisionMatrix.forEach(({ x, y }) => {
      p5.push()
      p5.stroke("purple")
      p5.strokeWeight(10)
      p5.point(x * size, y * size)
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
      p5.line(pointX * size, pointY * size, subX * size, subY * size)
      p5.pop()
    })

    // const { x: subX, y: subY } = pointsMatrix[count]
    //   ? pointsMatrix[count]
    //   : pointsMatrix[pointsMatrix.length - 1]
    // const { x: pointX, y: pointY } = pointsMatrix[count + 1]
    //   ? pointsMatrix[count + 1]
    //   : pointsMatrix[0]
    // p5.line(pointX * size, pointY * size, subX * size, subY * size)

    // if (count >= GlobalValues.vertices * GlobalValues.subdivisions) {
    //   count = 0
    //   p5.frameRate(0)
    //   setTimeout(() => {
    //     p5.frameRate(speed)
    //     p5.background(220)
    //   }, 2000)
    // } else {
    //   count++
    // }
  }
}

const node = document.getElementById("p5")

if (node) {
  const testing = new p5(sketch, node)
  console.log(testing)
}
