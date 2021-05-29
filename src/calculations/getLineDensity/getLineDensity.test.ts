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

  it.each`
    vertices | subdivisions | points | jumps        | expectedDensity
    ${9}     | ${2}         | ${3}   | ${[]}        | ${6}
    ${9}     | ${2}         | ${3}   | ${[1, 1, 1]} | ${6}
    ${9}     | ${2}         | ${3}   | ${[2, 2, 1]} | ${18}
    ${12}    | ${65}        | ${20}  | ${[2, 2, 1]} | ${117}
    ${30}    | ${12}        | ${45}  | ${[2]}       | ${4}
    ${1}     | ${1}         | ${1}   | ${[1]}       | ${1}
  `(
    "should return correct density for vertices:$vertices, subdivisions:$subdivisions, points:$points",
    ({ vertices, subdivisions, points, expectedDensity, jumps }) => {
      const actualDensity = getLineDensity({
        vertices,
        subdivisions,
        points,
        jumps,
      })
      expect(actualDensity).toEqual(expectedDensity)
    }
  )
})
