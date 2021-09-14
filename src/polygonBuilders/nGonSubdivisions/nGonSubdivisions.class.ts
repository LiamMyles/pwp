import { NGonJumps } from "../nGonJumps"

export class NGonSubdivisions extends NGonJumps {
  constructor() {
    super()
  }

  subdivisions = 0
  points = 0
  autoPoints = false

  setSubdivisions(subdivisions: number): void {}
  setPoints(points: number): void {}
}
