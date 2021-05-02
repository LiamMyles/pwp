interface verticesMatrix {
  x: number
  y: number
}

export function getSubdivisionMatrix(
  subdivisions: number,
  matrix: verticesMatrix[],
  vertices: number
): verticesMatrix[] {
  return matrix
    .slice(0, vertices)
    .map((_, index, passedMatrix) => {
      const startY = passedMatrix[index].y
      const endY = passedMatrix[index + 1]
        ? passedMatrix[index + 1].y
        : passedMatrix[0].y
      const startX = passedMatrix[index].x
      const endX = passedMatrix[index + 1]
        ? passedMatrix[index + 1].x
        : passedMatrix[0].x

      return [...Array(subdivisions)].map((_, index) => {
        const partOfSubdivision = index
        const y =
          (1 - partOfSubdivision / subdivisions) * startY +
          (partOfSubdivision / subdivisions) * endY

        const x =
          (1 - partOfSubdivision / subdivisions) * startX +
          (partOfSubdivision / subdivisions) * endX

        return { x, y }
      })
    })
    .flat()
}

export function getPointsMatrix(
  vertices: number,
  subdivisions: number,
  points: number,
  subdivisionMatrix: verticesMatrix[]
) {
  const totalPoints = vertices * subdivisions
  return [...Array(totalPoints)].map((_, index) => {
    return subdivisionMatrix[(index * points) % totalPoints]
  })
}
