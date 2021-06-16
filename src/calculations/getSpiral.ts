import type { VerticesMatrix } from "Calculations/types"

export function getSpiral(
  verts: VerticesMatrix[],
  reduction: number
): VerticesMatrix[] {
  const results = [...Array(reduction)].map((_, index) => {
    const { x, y } = verts[index % verts.length]
    return { x: x * (1 - index / reduction), y: y * (1 - index / reduction) }
  })
  return results
}
