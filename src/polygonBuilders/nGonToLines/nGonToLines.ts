import { useEffect, useState } from "react"

import type { Vertices } from "../n-gon.types"
import { NGonSubdivisions } from "../nGonSubdivisions"

export class NGonToLines extends NGonSubdivisions {
  constructor() {
    super()
  }

  verticesPairsMatrix: [Vertices, Vertices][] = []
  arrayListJ: [Vertices, Vertices][] = []
  arrayListK: [Vertices, Vertices][] = []
  arrayListVWEven: [Vertices, Vertices][] = []
  arrayListVWOdd: [Vertices, Vertices][] = []
  kValue = 1
  vValue = 1
  wValue = 1

  setKValue(kValue: number): void {
    this.kValue = kValue
  }

  useKValue(
    initialKValue: number
  ): [number, React.Dispatch<React.SetStateAction<number>>] {
    const [kValue, setKValue] = useState(initialKValue)
    useEffect(() => {
      this.setKValue(kValue)
      this.calculateVertexMatrix()
    }, [kValue])

    return [kValue, setKValue]
  }

  setVValue(vValue: number): void {
    this.vValue = vValue
  }

  useVValue(
    initialVValue: number
  ): [number, React.Dispatch<React.SetStateAction<number>>] {
    const [vValue, setVValue] = useState(initialVValue)
    useEffect(() => {
      this.setVValue(vValue)
      this.calculateVertexMatrix()
    }, [vValue])

    return [vValue, setVValue]
  }
  setWValue(wValue: number): void {
    this.wValue = wValue
  }

  useWValue(
    initialWValue: number
  ): [number, React.Dispatch<React.SetStateAction<number>>] {
    const [wValue, setWValue] = useState(initialWValue)
    useEffect(() => {
      this.setWValue(wValue)
      this.calculateVertexMatrix()
    }, [wValue])

    return [wValue, setWValue]
  }

  restVerticesPairs(): void {
    this.verticesPairsMatrix = []
    this.arrayListJ = []
    this.arrayListK = []
    this.arrayListVWEven = []
    this.arrayListVWOdd = []
  }

  calculateVertexMatrix(): void {
    super.calculateVertexMatrix()
    this.restVerticesPairs()

    const length = Math.floor(this.subdivisionMatrix.length / 2)

    const verticesMatrixNegativeIndexable = new Proxy(this.verticesMatrix, {
      get(target, selection) {
        if (typeof selection === "string") {
          const int = parseInt(selection, 10)
          if (int < 0) {
            return target[int + target.length]
          } else {
            return target[int]
          }
        }
      },
    })

    for (let inc = 1; inc < length + 1; inc++) {
      const vertexA = Math.floor(
        length / 2 - (inc % this.subdivisionMatrix.length)
      )
      const vertexB = Math.floor(
        length / 2 + (inc % this.subdivisionMatrix.length)
      )

      this.arrayListJ.push([
        verticesMatrixNegativeIndexable[vertexA],
        verticesMatrixNegativeIndexable[vertexB],
      ])
    }

    for (let inc = 1; inc < length + 1; inc++) {
      const vertexA = Math.floor(
        (this.kValue + 1) / 2 - (inc % this.subdivisionMatrix.length)
      )
      const vertexB = Math.floor(
        (this.kValue - 1) / 2 + (inc % this.subdivisionMatrix.length)
      )

      this.arrayListK.push([
        verticesMatrixNegativeIndexable[vertexA],
        verticesMatrixNegativeIndexable[vertexB],
      ])
    }

    for (let inc = 1; inc < length + 1; inc++) {
      const vertexA = Math.floor(
        (((this.vValue + this.wValue) % this.subdivisionMatrix.length) / 2 -
          inc) %
          this.subdivisionMatrix.length
      )
      const vertexB = Math.floor(
        (((this.vValue + this.wValue) % this.subdivisionMatrix.length) / 2 +
          inc) %
          this.subdivisionMatrix.length
      )

      this.arrayListVWEven.push([
        verticesMatrixNegativeIndexable[vertexA],
        verticesMatrixNegativeIndexable[vertexB],
      ])
    }

    for (let inc = 1; inc < length + 1; inc++) {
      const vertexA = Math.floor(
        (((this.vValue + this.wValue + 1) % this.subdivisionMatrix.length) / 2 -
          inc) %
          this.subdivisionMatrix.length
      )
      const vertexB = Math.floor(
        (((this.vValue + this.wValue - 1) % this.subdivisionMatrix.length) / 2 +
          inc) %
          this.subdivisionMatrix.length
      )

      this.arrayListVWOdd.push([
        verticesMatrixNegativeIndexable[vertexA],
        verticesMatrixNegativeIndexable[vertexB],
      ])
    }

    this.verticesPairsMatrix = [
      ...this.arrayListJ,
      ...this.arrayListK,
      ...this.arrayListVWEven,
      ...this.arrayListVWOdd,
    ]
  }
}
