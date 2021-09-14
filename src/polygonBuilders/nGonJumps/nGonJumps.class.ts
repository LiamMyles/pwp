import { calcJumpedPoints } from "MatrixCalculations/calcJumpedPoints"

import { NGon } from "../nGon"

export class NGonJumps extends NGon {
  constructor() {
    super()
  }

  jumps: number[] = []

  setJumps(jumps: number[]): void {
    this.jumps = jumps
    this.verticesMatrix = calcJumpedPoints(this.verticesMatrix, ...jumps)
  }
}
