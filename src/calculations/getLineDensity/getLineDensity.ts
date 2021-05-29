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

  const jumpsFactor =
    (vertices * totalJumps) / GCD(vertices, sumOfJumps % vertices)

  const density =
    (jumpsFactor * subdivisions) / GCD(jumpsFactor * subdivisions, points)

  return density
}
