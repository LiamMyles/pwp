import type { VerticesMatrix } from "Calculations/types"

export function getJumpedPoints(
  initialVertices: VerticesMatrix[],
  ...jumps: number[]
): VerticesMatrix[] {
  if (jumps.length !== 0) {
    let lastValue = 0
    const jumpedMatrix = [...Array(initialVertices.length * jumps.length)].map(
      (_, index) => {
        const currentJump = index % jumps.length
        const newValue = jumps[currentJump] + lastValue

        lastValue = newValue
        return initialVertices[newValue % initialVertices.length]
      }
    )

    jumpedMatrix.push(jumpedMatrix.shift() as VerticesMatrix)
    return jumpedMatrix
  } else {
    return initialVertices
  }
}
