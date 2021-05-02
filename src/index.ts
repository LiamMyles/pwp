import p5 from "p5"

import { GlobalValues } from "./globals"
import { sketch } from "./sketch"

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

const node = document.getElementById("p5")

if (node) {
  const testing = new p5(sketch, node)
  console.log(testing)
}
