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
  arrayListVW: [Vertices, Vertices][] = []
  jValue = 1
  kValue = 1
  vValue = 1
  wValue = 1

  setJValue(jValue: number): void {
    this.jValue = jValue
  }

  useJValue(
    initialJValue: number
  ): [number, React.Dispatch<React.SetStateAction<number>>] {
    const [jValue, setJValue] = useState(initialJValue)
    useEffect(() => {
      this.setJValue(jValue)
      this.calculateVertexMatrix()
    }, [jValue])

    return [jValue, setJValue]
  }

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
    this.arrayListVW = []
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

    for (let inc = 0; inc < length + 1; inc++) {
      const vertexA = Math.floor(
        this.jValue / 2 - (inc % this.subdivisionMatrix.length)
      )
      const vertexB = Math.ceil(
        this.jValue / 2 + (inc % this.subdivisionMatrix.length)
      )

      this.arrayListJ.push([
        verticesMatrixNegativeIndexable[vertexA],
        verticesMatrixNegativeIndexable[vertexB],
      ])
    }

    for (let inc = 0; inc < length + 1; inc++) {
      const vertexA = Math.floor(
        this.kValue / 2 - (inc % this.subdivisionMatrix.length)
      )
      const vertexB = Math.ceil(
        this.kValue / 2 + (inc % this.subdivisionMatrix.length)
      )

      this.arrayListK.push([
        verticesMatrixNegativeIndexable[vertexA],
        verticesMatrixNegativeIndexable[vertexB],
      ])
    }

    for (let inc = 0; inc < length + 1; inc++) {
      const vertexA = Math.floor(
        (((this.vValue + this.wValue) % this.subdivisionMatrix.length) / 2 -
          inc) %
          this.subdivisionMatrix.length
      )
      const vertexB = Math.ceil(
        (((this.vValue + this.wValue) % this.subdivisionMatrix.length) / 2 +
          inc) %
          this.subdivisionMatrix.length
      )

      this.arrayListVW.push([
        verticesMatrixNegativeIndexable[vertexA],
        verticesMatrixNegativeIndexable[vertexB],
      ])
    }

    this.verticesPairsMatrix = [
      ...this.arrayListJ,
      ...this.arrayListK,
      ...this.arrayListVW,
    ]
  }
}
