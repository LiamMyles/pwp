export interface GlobalValues {
  vertices: number
  subdivisions: number
  points: number
  jumps: number[]
  showSubdivisions: boolean
  showVertices: boolean
  matrix: Cords[]
  slowDraw: boolean
  reduction: number
  showMirror: boolean
}

interface Cords {
  x: number
  y: number
}

export const GlobalValues: GlobalValues = {
  vertices: 4,
  subdivisions: 12,
  points: 30,
  jumps: [],
  showSubdivisions: false,
  showVertices: false,
  slowDraw: false,
  reduction: 30,
  showMirror: false,
  matrix: [
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ],
}
