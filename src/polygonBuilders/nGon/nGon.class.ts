import { calcNGonVertices } from "MatrixCalculations/calcNGonVertices"

import { Vertices } from "../n-gon.types"

export class NGon {
  verticesAmount = 0
  verticesMatrix: Vertices[] = []

  setVertices(count: number): void {
    this.verticesAmount = count
  }

  calculateVertexMatrix(): void {
    this.verticesMatrix = calcNGonVertices(this.verticesAmount)
  }
}
