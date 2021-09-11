import { getNGonVertices } from "Calculations/getNGonVertices"

import { Vertices } from "../n-gon.types"

export class NGon {
  verticesAmount = 0
  verticesMatrix: Vertices[] = []

  setVertices(count: number): void {
    this.verticesAmount = count
    this.verticesMatrix = getNGonVertices(count)
  }
}
