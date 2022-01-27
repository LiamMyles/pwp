import { calcNGonVertices } from "MatrixCalculations/calcNGonVertices"
import { useEffect, useState } from "react"

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

  useVertices(
    initialVertices: number
  ): [number, React.Dispatch<React.SetStateAction<number>>] {
    const [vertices, setVertex] = useState(initialVertices)
    useEffect(() => {
      this.setVertices(vertices)
      this.calculateVertexMatrix()
    }, [vertices])

    return [vertices, setVertex]
  }
}
