export function getInitialPoints(sides, startingSize) {
  const twoPi = Math.PI * 2;
  const angleBetweenPoints = twoPi / sides;
  let currentAngle = angleBetweenPoints;
  return [...Array(sides)].map(() => {
    currentAngle += angleBetweenPoints;
    const cos = Math.cos(currentAngle);
    const sin = Math.sin(currentAngle);
    const x = Math.round(cos * startingSize);
    const y = Math.round(sin * startingSize);
    return {x, y, sin, cos};
  });
}
export function getSubdivisionMatrix(subdivisions, matrix, vertices) {
  return matrix.slice(0, vertices).map((_, index, passedMatrix) => {
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
export function getPointsMatrix(vertices, subdivisions, points, subdivisionMatrix) {
  const totalPoints = vertices * subdivisions;
  return [...Array(totalPoints)].map((_, index) => {
    return subdivisionMatrix[index * points % totalPoints];
  });
}
