import p5 from "../snowpack/pkg/p5.js";
const GlobalValues = {
  vertices: 4,
  subdivisions: 4,
  points: 37
};
const vertexRange = document.getElementById("vertex-count");
const vertexValue = document.getElementById("vertex-value");
const subdivisionsRange = document.getElementById("subdivisions-count");
const subdivisionsValue = document.getElementById("subdivisions-value");
const pointsRange = document.getElementById("points-count");
const pointsValue = document.getElementById("points-value");
vertexRange.addEventListener("input", () => {
  const value = vertexRange.value;
  GlobalValues.vertices = parseInt(vertexRange.value);
  vertexValue.innerHTML = value;
});
subdivisionsRange.addEventListener("input", () => {
  const value = subdivisionsRange.value;
  GlobalValues.subdivisions = parseInt(value);
  subdivisionsValue.innerHTML = value;
});
pointsRange.addEventListener("input", () => {
  const value = pointsRange.value;
  GlobalValues.points = parseInt(value);
  pointsValue.innerHTML = value;
});
const initialMatrix = [
  {x: 0, y: 0},
  {x: 0, y: 1},
  {x: 1, y: 1},
  {x: 1, y: 0},
  {x: 0.25, y: 0.25},
  {x: 0.25, y: 0.75},
  {x: 0.75, y: 0.75},
  {x: 0.75, y: 0.25}
];
const speed = 12;
const size = 580;
function quickRound(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}
function getSubdivisionMatrix(subdivisions, matrix) {
  return matrix.slice(0, GlobalValues.vertices).map((_, index, passedMatrix) => {
    const startY = passedMatrix[index].y;
    const endY = passedMatrix[index + 1] ? passedMatrix[index + 1].y : passedMatrix[0].y;
    const startX = passedMatrix[index].x;
    const endX = passedMatrix[index + 1] ? passedMatrix[index + 1].x : passedMatrix[0].x;
    return [...Array(subdivisions)].map((_2, index2) => {
      const partOfSubdivision = index2;
      const y = quickRound((1 - partOfSubdivision / subdivisions) * startY + partOfSubdivision / subdivisions * endY);
      const x = quickRound((1 - partOfSubdivision / subdivisions) * startX + partOfSubdivision / subdivisions * endX);
      return {x, y};
    });
  }).flat();
}
function getPointsMatrix(vertices, subdivisions, points, subdivisionMatrix) {
  const totalPoints = vertices * subdivisions;
  return [...Array(totalPoints)].map((_, index) => {
    return subdivisionMatrix[index * points % totalPoints];
  });
}
const sketch = (p52) => {
  p52.setup = () => {
    p52.createCanvas(600, 600);
    p52.background(220);
    p52.frameRate(speed);
  };
  p52.draw = () => {
    p52.background(220);
    p52.angleMode(p52.DEGREES);
    p52.translate(10, p52.height - 10);
    p52.scale(1, -1);
    const subdivisionMatrix = getSubdivisionMatrix(GlobalValues.subdivisions, initialMatrix);
    const pointsMatrix = getPointsMatrix(GlobalValues.vertices, GlobalValues.subdivisions, GlobalValues.points, subdivisionMatrix);
    initialMatrix.forEach(({x, y}) => {
      p52.push();
      p52.stroke("green");
      p52.strokeWeight(15);
      p52.point(x * size, y * size);
      p52.pop();
    });
    subdivisionMatrix.forEach(({x, y}) => {
      p52.push();
      p52.stroke("purple");
      p52.strokeWeight(10);
      p52.point(x * size, y * size);
      p52.pop();
    });
    pointsMatrix.forEach((_, count) => {
      p52.push();
      const {x: subX, y: subY} = pointsMatrix[count] ? pointsMatrix[count] : pointsMatrix[pointsMatrix.length - 1];
      const {x: pointX, y: pointY} = pointsMatrix[count + 1] ? pointsMatrix[count + 1] : pointsMatrix[0];
      p52.line(pointX * size, pointY * size, subX * size, subY * size);
      p52.pop();
    });
  };
};
const node = document.getElementById("p5");
if (node) {
  const testing = new p5(sketch, node);
  console.log(testing);
}
