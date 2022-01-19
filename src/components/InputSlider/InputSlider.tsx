import "@reach/slider/styles.css"

import { Slider } from "@reach/slider"
import styled from "styled-components"

const StyledWrapperDiv = styled.div`
  display: grid;
  grid-gap: 10px;
  width: 600px;
  margin: 10px auto;
  h1 {
    font-size: xx-large;
  }
  p {
    font-size: large;
  }
`

const StyledSlider = styled(StyledWrapperDiv)`
  grid-template-columns: 1fr 130px;
  & label {
    display: inline-block;
    margin-bottom: 5px;
  }
  & input {
    width: calc(100% - 10px);
  }
`

interface InputSliderProps {
  title: string
  min: number
  max: number
  setter:
    | React.Dispatch<React.SetStateAction<number>>
    | ((value: number) => void)
  currentValue: number
}

export function InputSlider({
  title,
  min,
  max,
  setter,
  currentValue,
}: InputSliderProps): React.ReactElement {
  return (
    <StyledSlider>
      <div>
        <label
          htmlFor={`${title.split(" ").join("-").toLocaleLowerCase()}-slider`}
        >
          {title}
        </label>
        <Slider
          min={min}
          max={max}
          id={`${title.split(" ").join("-").toLocaleLowerCase()}-slider`}
          onChange={(value) => setter(value)}
          value={currentValue}
        />
      </div>
      <div>
        <label
          htmlFor={`${title.split(" ").join("-").toLocaleLowerCase()}-input`}
        >
          {title}
        </label>
        <input
          type="number"
          id={`${title.split(" ").join("-").toLocaleLowerCase()}-input`}
          min={1}
          onChange={({ currentTarget: { value } }) => {
            setter(parseInt(value) || 1)
          }}
          value={currentValue}
        />
      </div>
    </StyledSlider>
  )
}
