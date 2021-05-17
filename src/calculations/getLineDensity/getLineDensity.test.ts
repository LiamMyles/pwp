import { getLineDensity } from "Calculations/getLineDensity"

describe("getLineDensity", () => {
  it.each`
    vertices | subdivisions | points | expectedDensity
    ${9}     | ${2}         | ${3}   | ${6}
    ${12}    | ${65}        | ${20}  | ${39}
    ${30}    | ${12}        | ${45}  | ${8}
    ${1}     | ${1}         | ${1}   | ${1}
  `(
    "should return correct density for vertices:$vertices, subdivisions:$subdivisions, points:$points",
    ({ vertices, subdivisions, points, expectedDensity }) => {
      const actualDensity = getLineDensity({ vertices, subdivisions, points })
      expect(actualDensity).toEqual(expectedDensity)
    }
  )
})
