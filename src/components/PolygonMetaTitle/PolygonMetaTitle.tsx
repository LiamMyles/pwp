import { calcLineDensity } from "MatrixCalculations/calcLineDensity"
import styled from "styled-components"

const Title = styled.h1`
  font-size: 20px;
  width: 600px;
  margin: 5px auto;
  padding: 0 0 10px;
  border-bottom: solid grey 2px;
`

interface PolygonMetaTitleProps {
  vertices: number
  subdivisions: number
  points: number
  jumps: number[]
}

export function PolygonMetaTitle({
  vertices,
  subdivisions,
  points,
  jumps,
}: PolygonMetaTitleProps): React.ReactElement {
  const { lineDensity, subdivisionCommonFactor, verticesCommonFactor } =
    calcLineDensity({ vertices, subdivisions, points, jumps })

  return (
    <Title>
      Polygon: ({vertices},{subdivisions},{points}
      {jumps.length > 0 && `,J(${jumps?.join(",")})`}) - Lines: {lineDensity},
      VCF: {verticesCommonFactor}, SCF: {subdivisionCommonFactor}
    </Title>
  )
}
