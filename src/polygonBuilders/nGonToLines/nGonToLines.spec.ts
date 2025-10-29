import { NGonToLines } from "./nGonToLines"

it("should world", () => {
  const NGonInstance = new NGonToLines()
  NGonInstance.setVertices(8)
  NGonInstance.calculateVertexMatrix()
})
