export function getInitialPoints(vertices) {
  const twoPi = Math.PI * 2;
  const angleBetweenPoints = twoPi / vertices;
  let currentAngle = angleBetweenPoints;
  const initialVertices = [...Array(vertices)].map(() => {
    currentAngle += angleBetweenPoints;
    const cos = Math.cos(currentAngle);
    const sin = Math.sin(currentAngle);
    const y = cos;
    const x = sin;
    return {x, y};
  });
  return initialVertices;
}
export function getJumpedPoints(initialVertices, ...jumps) {
  if (jumps.length !== 0) {
    let lastValue = 0;
    const jumpedMatrix = [...Array(initialVertices.length * jumps.length)].map((_, index) => {
      const currentJump = index % jumps.length;
      const newValue = jumps[currentJump] + lastValue;
      lastValue = newValue;
      return initialVertices[newValue % initialVertices.length];
    });
    jumpedMatrix.push(jumpedMatrix.shift());
    return jumpedMatrix;
  } else {
    return initialVertices;
  }
}
export function getSubdivisionMatrix(subdivisions, matrix) {
  return matrix.map((_, index, passedMatrix) => {
    const startY = passedMatrix[index].y;
    const endY = passedMatrix[index + 1] ? passedMatrix[index + 1].y : passedMatrix[0].y;
    const startX = passedMatrix[index].x;
    const endX = passedMatrix[index + 1] ? passedMatrix[index + 1].x : passedMatrix[0].x;
    return [...Array(subdivisions)].map((_2, index2) => {
      const partOfSubdivision = index2;
      const y = (1 - partOfSubdivision / subdivisions) * startY + partOfSubdivision / subdivisions * endY;
      const x = (1 - partOfSubdivision / subdivisions) * startX + partOfSubdivision / subdivisions * endX;
      return {x, y};
    });
  }).flat();
}
export function getPointsMatrix(vertices, subdivisions, points, subdivisionMatrix, ...jumps) {
  let totalPoints = vertices * subdivisions;
  if (jumps.length !== 0) {
    totalPoints = jumps.length * vertices * subdivisions;
  }
  return [...Array(totalPoints)].map((_, index) => {
    return subdivisionMatrix[index * points % totalPoints];
  });
}
