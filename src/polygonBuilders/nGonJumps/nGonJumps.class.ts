import { calcJumpedMatrix } from "MatrixCalculations/calcJumpedMatrix"

import { NGon } from "../nGon"

export class NGonJumps extends NGon {
  constructor() {
    super()
  }

  jumps: number[] = []

  setJumps(jumps: number[]): void {
    this.jumps = jumps
    this.verticesMatrix = calcJumpedMatrix(this.verticesMatrix, ...jumps)
  }
}
