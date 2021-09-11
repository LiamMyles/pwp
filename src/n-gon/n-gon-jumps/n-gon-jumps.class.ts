import { getJumpedPoints } from "Calculations/getJumpedPoints"

import { NGon } from "../n-gon/n-gon.class"

export class NGonJumps extends NGon {
  constructor() {
    super()
  }

  jumps: number[] = []

  setJumps(jumps: number[]): void {
    this.jumps = jumps
    this.verticesMatrix = getJumpedPoints(this.verticesMatrix, ...jumps)
  }
}
