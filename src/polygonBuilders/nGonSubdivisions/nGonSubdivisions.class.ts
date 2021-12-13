import { calcPointsMatrix } from "MatrixCalculations/calcPointsMatrix"
import { calcSubdivisionMatrix } from "MatrixCalculations/calcSubdivisionMatrix"

import { NGonJumps } from "../nGonJumps"

export class NGonSubdivisions extends NGonJumps {
  constructor() {
    super()
  }

  subdivisions = 0
  points = 0
  autoPoints = false

  setSubdivisions(subdivisions: number): void {
    this.subdivisions = subdivisions
    this.verticesMatrix = calcSubdivisionMatrix(
      subdivisions,
      this.verticesMatrix
    )
  }

  setPoints(points: number): void {
    this.points = points
    this.verticesMatrix = calcPointsMatrix(
      this.verticesAmount,
      this.subdivisions,
      points,
      this.verticesMatrix
    )
  }
}
