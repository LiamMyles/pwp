import {GlobalValues} from "./globals.js";
import {getSubdivisionMatrix, getPointsMatrix, getInitialPoints} from "./pwp.js";
const speed = 10;
const size = 250;
export const sketch = (p5) => {
  p5.setup = () => {
    p5.createCanvas(600, 600);
    p5.background(220);
    p5.frameRate(speed);
  };
  let slowDrawCount = 0;
  let previousDrawState = false;
  p5.draw = () => {
    if (previousDrawState !== GlobalValues.slowDraw) {
      p5.background(220);
      previousDrawState = GlobalValues.slowDraw;
    }
    p5.angleMode(p5.DEGREES);
    p5.translate(p5.width / 2, p5.height / 2);
    p5.scale(1, -1);
    const matrix = getInitialPoints(GlobalValues.vertices, ...GlobalValues.jumps);
    GlobalValues.matrix = matrix;
    const subdivisionMatrix = getSubdivisionMatrix(GlobalValues.subdivisions, matrix, GlobalValues.vertices);
    const pointsMatrix = getPointsMatrix(GlobalValues.vertices, GlobalValues.subdivisions, GlobalValues.points, subdivisionMatrix);
    if (GlobalValues.slowDraw) {
      p5.push();
      const {x: subX, y: subY} = pointsMatrix[slowDrawCount] ? pointsMatrix[slowDrawCount] : pointsMatrix[pointsMatrix.length - 1];
      const {x: pointX, y: pointY} = pointsMatrix[slowDrawCount + 1] ? pointsMatrix[slowDrawCount + 1] : pointsMatrix[0];
      p5.strokeWeight(0.2);
      p5.line(pointX * size, pointY * size, subX * size, subY * size);
      p5.pop();
      slowDrawCount++;
      if (slowDrawCount === pointsMatrix.length) {
        p5.background(220);
        slowDrawCount = 0;
      }
    } else {
      p5.background(220);
      pointsMatrix.forEach((_, count) => {
        p5.push();
        const {x: subX, y: subY} = pointsMatrix[count] ? pointsMatrix[count] : pointsMatrix[pointsMatrix.length - 1];
        const {x: pointX, y: pointY} = pointsMatrix[count + 1] ? pointsMatrix[count + 1] : pointsMatrix[0];
        p5.strokeWeight(0.2);
        p5.line(pointX * size, pointY * size, subX * size, subY * size);
        p5.pop();
      });
    }
    if (GlobalValues.showVertices) {
      matrix.forEach(({x, y}) => {
        p5.push();
        p5.stroke("green");
        p5.strokeWeight(15);
        p5.point(x * size, y * size);
        p5.pop();
      });
    }
    if (GlobalValues.showSubdivisions) {
      subdivisionMatrix.forEach(({x, y}) => {
        p5.push();
        p5.stroke("purple");
        p5.strokeWeight(10);
        p5.point(x * size, y * size);
        p5.pop();
      });
    }
  };
};
