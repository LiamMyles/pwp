import type { VerticesMatrix } from "MatrixCalculations/types"

export function calcNGonVertices(vertices: number): VerticesMatrix[] {
  const twoPi = Math.PI * 2
  const angleBetweenPoints = twoPi / vertices

  let currentAngle = 0 - angleBetweenPoints

  const initialVertices = [...Array(vertices)].map(() => {
    currentAngle += angleBetweenPoints
    const cos = Math.cos(currentAngle)
    const sin = Math.sin(currentAngle)
    const y = cos
    const x = sin

    return { x, y }
  })

  return initialVertices
}
