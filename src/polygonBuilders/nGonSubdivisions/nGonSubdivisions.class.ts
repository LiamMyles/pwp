import { calcJumpedMatrix } from "MatrixCalculations/calcJumpedMatrix"
import { calcLineDensity } from "MatrixCalculations/calcLineDensity"
import { calcNGonVertices } from "MatrixCalculations/calcNGonVertices"
import { calcPointsMatrix } from "MatrixCalculations/calcPointsMatrix"
import { calcSubdivisionMatrix } from "MatrixCalculations/calcSubdivisionMatrix"
import type { VerticesMatrix } from "MatrixCalculations/types"
import { useEffect, useState } from "react"

import { NGonJumps } from "../nGonJumps"

export class NGonSubdivisions extends NGonJumps {
  constructor() {
    super()
  }

  subdivisions = 1
  points = 1
  autoPoints = false
  subdivisionMatrix: VerticesMatrix[] = [{ x: 0, y: 0 }]
  initialMatrix: VerticesMatrix[] = [{ x: 0, y: 0 }]

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
    this.initialMatrix = calcNGonVertices(this.verticesAmount)

    const jumpedMatrix = calcJumpedMatrix(this.initialMatrix, ...this.jumps)

    this.subdivisionMatrix = calcSubdivisionMatrix(
      this.subdivisions,
      jumpedMatrix
    )

    const pointsMatrix = calcPointsMatrix(
      this.verticesAmount,
      this.subdivisions,
      this.points,
      this.subdivisionMatrix,
      ...this.jumps
    )
    this.verticesMatrix = pointsMatrix

    const { lineDensity, subdivisionCommonFactor, verticesCommonFactor } =
      calcLineDensity({
        vertices: this.verticesAmount,
        subdivisions: this.subdivisions,
        points: this.points,
        jumps: this.jumps,
      })

    this.lineDensity = lineDensity
    this.subdivisionCommonFactor = subdivisionCommonFactor
    this.verticesCommonFactor = verticesCommonFactor
  }
}
