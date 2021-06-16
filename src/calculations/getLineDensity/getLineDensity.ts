import type { VSPJ } from "Calculations/types"

function GCD(a: number, b: number): number {
  if (!b) {
    return a
  }

  return GCD(b, a % b)
}

export function getLineDensity({
  vertices,
  subdivisions,
  points,
  jumps = [],
}: VSPJ): number {
  let totalJumps = 1
  let sumOfJumps = 1

  if (jumps.length !== 0) {
    totalJumps = jumps.length
    sumOfJumps = jumps.reduce((a, b) => a + b)
  }

  const VerticesCommonFactor = GCD(vertices, sumOfJumps % vertices)

  const VerticesUsed =
    (vertices * totalJumps) / GCD(vertices, sumOfJumps % vertices)

  const SubdivisionCommonFactor = GCD(VerticesUsed * subdivisions, points)

  const linesUsed = (VerticesUsed * subdivisions) / SubdivisionCommonFactor

  // Add this next to line like -> Lines: 2, vcf: 1, scf: 1
  console.log({ VerticesCommonFactor, SubdivisionCommonFactor })

  return linesUsed
}
