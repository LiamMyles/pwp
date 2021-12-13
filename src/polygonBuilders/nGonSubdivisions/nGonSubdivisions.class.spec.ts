import { NGonSubdivisions } from "PolygonBuilders/nGonSubdivisions"

describe("NGon Class", () => {
  it("should inherit from nGonJumps and start with correct defaults", () => {
    const NGonInstance = new NGonSubdivisions()

    expect(NGonInstance.verticesAmount).toEqual(0)
    expect(NGonInstance.verticesMatrix).toEqual([])
    expect(NGonInstance.setVertices).toBeDefined()
    expect(NGonInstance.jumps).toEqual([])
    expect(NGonInstance.points).toEqual(0)
    expect(NGonInstance.subdivisions).toEqual(0)
    expect(NGonInstance.autoPoints).toEqual(false)
  })

  it("should update points when set", () => {
    const NGonInstance = new NGonSubdivisions()
    NGonInstance.setVertices(4)

    const originalVertices = [...NGonInstance.verticesMatrix]

    expect(NGonInstance.points).toEqual(0)

    NGonInstance.setPoints(11)

    expect(NGonInstance.verticesMatrix).not.toEqual(originalVertices)
    expect(NGonInstance.points).toEqual(11)
  })

  it.todo("should update subdivisions when set")

  it.todo("should update points automatically when autoPoints is true")

  it.todo("should NOT update points automatically when autoPoints is false")
})
