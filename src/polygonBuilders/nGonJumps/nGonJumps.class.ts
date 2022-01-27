import { calcJumpedMatrix } from "MatrixCalculations/calcJumpedMatrix"
import { calcNGonVertices } from "MatrixCalculations/calcNGonVertices"
import { useEffect, useState } from "react"

import { Vertices } from "../n-gon.types"
import { NGon } from "../nGon"

export class NGonJumps extends NGon {
  constructor() {
    super()
  }

  jumps: number[] = []
  initialJumpsVerticesMatrix: Vertices[] = []

  setJumps(jumps: number[]): void {
    this.jumps = jumps
  }

  calculateVertexMatrix(): void {
    const initialMatrix = calcNGonVertices(this.verticesAmount)
    this.verticesMatrix = calcJumpedMatrix(initialMatrix, ...this.jumps)
  }

  useJumps(
    initialJumps: number[]
  ): [number[], React.Dispatch<React.SetStateAction<number[]>>] {
    const [jumps, setJumps] = useState(initialJumps)
    useEffect(() => {
      this.setJumps(jumps)
      this.calculateVertexMatrix()
    }, [jumps])

    return [jumps, setJumps]
  }
}
