import { calcJumpedMatrix } from "MatrixCalculations/calcJumpedMatrix"
import { calcNGonVertices } from "MatrixCalculations/calcNGonVertices"
import { calcPointsMatrix } from "MatrixCalculations/calcPointsMatrix"
import { calcSubdivisionMatrix } from "MatrixCalculations/calcSubdivisionMatrix"
import { useEffect, useState } from "react"

import { NGonJumps } from "../nGonJumps"

export class NGonSubdivisions extends NGonJumps {
  constructor() {
    super()
  }

  subdivisions = 1
  points = 1
  autoPoints = false

  setSubdivisions(subdivisions: number): void {
    this.subdivisions = subdivisions
  }

  useSubdivisions(
    initialSubdivisions: number
  ): [number, React.Dispatch<React.SetStateAction<number>>] {
    const [subdivisions, setSubdivisions] = useState(initialSubdivisions)
    useEffect(() => {
      this.setSubdivisions(subdivisions)
      this.calculateVertexMatrix()
    }, [subdivisions])

    return [subdivisions, setSubdivisions]
  }

  setPoints(points: number): void {
    this.points = points
  }

  usePoints(
    initialPoints: number
  ): [number, React.Dispatch<React.SetStateAction<number>>] {
    const [points, setPoints] = useState(initialPoints)
    useEffect(() => {
      this.setPoints(points)
      this.calculateVertexMatrix()
    }, [points])

    return [points, setPoints]
  }

  calculateVertexMatrix(): void {
    const initialMatrix = calcNGonVertices(this.verticesAmount)

    const jumpedMatrix = calcJumpedMatrix(initialMatrix, ...this.jumps)

    const subdivisionMatrix = calcSubdivisionMatrix(
      this.subdivisions,
      jumpedMatrix
    )

    const pointsMatrix = calcPointsMatrix(
      this.verticesAmount,
      this.subdivisions,
      this.points,
      subdivisionMatrix,
      ...this.jumps
    )
    this.verticesMatrix = pointsMatrix
  }
}
