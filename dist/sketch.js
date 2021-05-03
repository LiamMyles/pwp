import {GlobalValues} from "./globals.js";
import {getSubdivisionMatrix, getPointsMatrix} from "./pwp.js";
const speed = 12;
const size = 580;
export const sketch = (p5) => {
  p5.setup = () => {
    p5.createCanvas(600, 600);
    p5.background(220);
    p5.frameRate(speed);
  };
  p5.draw = () => {
    p5.background(220);
    p5.angleMode(p5.DEGREES);
    p5.translate(10, p5.height - 10);
    p5.scale(1, -1);
    const subdivisionMatrix = getSubdivisionMatrix(GlobalValues.subdivisions, GlobalValues.initialMatrix, GlobalValues.vertices);
    const pointsMatrix = getPointsMatrix(GlobalValues.vertices, GlobalValues.subdivisions, GlobalValues.points, subdivisionMatrix);
    GlobalValues.initialMatrix.forEach(({x, y}) => {
      p5.push();
      p5.stroke("green");
      p5.strokeWeight(15);
      p5.point(x * size, y * size);
      p5.pop();
    });
    subdivisionMatrix.forEach(({x, y}) => {
      p5.push();
      p5.stroke("purple");
      p5.strokeWeight(10);
      p5.point(x * size, y * size);
      p5.pop();
    });
    pointsMatrix.forEach((_, count) => {
      p5.push();
      const {x: subX, y: subY} = pointsMatrix[count] ? pointsMatrix[count] : pointsMatrix[pointsMatrix.length - 1];
      const {x: pointX, y: pointY} = pointsMatrix[count + 1] ? pointsMatrix[count + 1] : pointsMatrix[0];
      p5.strokeWeight(0.2);
      p5.line(pointX * size, pointY * size, subX * size, subY * size);
      p5.pop();
    });
  };
};
