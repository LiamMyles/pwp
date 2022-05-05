import { getUrl, getUrlParameters } from "./getUrl"

describe("getUrl", () => {
  it("should return URL for vertex subdivisions and points", () => {
    const exampleParams: getUrlParameters = {
      path: "/",
      vertices: 5,
      subdivisions: 10,
      points: 20,
    }

    const exampleUrl = getUrl(exampleParams)
    const expectedUrl = "http://localhost/?vertex=5&subdivisions=10&points=20"

    expect(exampleUrl).toEqual(expectedUrl)
  })
  it("should NOT include jumps if undefined", () => {
    const exampleParams: getUrlParameters = {
      path: "/",
      vertices: 5,
      subdivisions: 10,
      points: 20,
    }

    const exampleUrl = getUrl(exampleParams)

    expect(exampleUrl).not.toContain("jump")
  })

  it("should include 1 jump for each jump", () => {
    const exampleParams: getUrlParameters = {
      path: "/",
      vertices: 5,
      subdivisions: 10,
      points: 20,
      jumps: [1, 2, 3, 4],
    }

    const exampleUrl = getUrl(exampleParams)
    const expectedUrl =
      "http://localhost/?vertex=5&subdivisions=10&points=20&jumps=1&jumps=2&jumps=3&jumps=4"

    expect(exampleUrl).toEqual(expectedUrl)
  })
})
