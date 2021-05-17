import type { VSP } from "Calculations/types"

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
}: VSP): number {
  const density =
    (vertices * subdivisions) / GCD(vertices * subdivisions, points)

  return density
}
