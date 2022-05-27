import { StyledWrapperDiv } from "Pages/testing/testing.styles"
import { useEffect } from "react"
import { NGonSubdivisions } from "Src/polygonBuilders/nGonSubdivisions"
import styled from "styled-components"

const JumpsArea = styled(StyledWrapperDiv)`
  grid-template-columns: repeat(5, 1fr);
  border-bottom: solid grey 2px;
  padding: 10px 0;
  & label {
    display: inline-block;
    margin-bottom: 5px;
  }

  & input {
    width: calc(100% - 10px);
  }
`
const TotalJumps = styled.div`
  grid-column: 1/6;
  display: grid;
`

interface PolygonJumpsProps {
  NGonClass: NGonSubdivisions
  totalJumps: number
  setTotalJumps: React.Dispatch<React.SetStateAction<number>>
  setJumps: React.Dispatch<React.SetStateAction<number[]>>
  jumps: number[]
}

export function PolygonJumps({
  NGonClass,
  totalJumps,
  setTotalJumps,
  setJumps,
  jumps,
}: PolygonJumpsProps): React.ReactElement {
  useEffect(() => {
    setJumps((previousState) => {
      if (totalJumps >= previousState.length) {
        const newJumps = [...previousState]
        const extraJumps = [...Array(totalJumps - previousState.length)].map(
          () => 1
        )
        newJumps.push(...extraJumps)
        NGonClass.setJumps(newJumps)
        NGonClass.calculateVertexMatrix()
        return newJumps
      }
      const newJumps = [...previousState].slice(0, totalJumps)

      NGonClass.setJumps(newJumps)
      NGonClass.calculateVertexMatrix()
      return newJumps
    })
  }, [totalJumps])

  return (
    <JumpsArea>
      <TotalJumps>
        <label htmlFor="total-jumps">Total Jumps</label>
        <input
          type="number"
          id="total-jumps"
          min={1}
          onChange={({ currentTarget: { value } }) => {
            setTotalJumps(parseInt(value) || 0)
          }}
          value={totalJumps}
        />
      </TotalJumps>
      {[...Array(totalJumps)].map((_, index) => {
        return (
          <div key={`jump-${index}`}>
            <label htmlFor={`jump-${index}`}>Jump {index + 1}</label>
            <input
              type="number"
              name=""
              id={`jump-${index}`}
              min="0"
              defaultValue={jumps[index]}
              onChange={({ currentTarget: { value } }) => {
                setJumps((previousState) => {
                  const newJumps = [...previousState]
                  newJumps[index] = parseInt(value) || 1
                  return newJumps
                })
              }}
            />
          </div>
        )
      })}
    </JumpsArea>
  )
}
