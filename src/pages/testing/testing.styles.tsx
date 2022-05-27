import { P5Canvas } from "Components/P5Canvas"
import styled from "styled-components"

export const StyledP5Canvas = styled(P5Canvas)`
  margin: 10px auto;
  width: 600px;
  height: 600px;
`

export const StyledWrapperDiv = styled.div`
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

export const ToggleBox = styled.div`
  margin: 10px 0;
`
export const ToggleArea = styled(StyledWrapperDiv)`
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  margin: 10px auto;
  border-top: solid grey 2px;
  border-bottom: solid grey 2px;
`

export const CopyWrapper = styled(StyledWrapperDiv)`
  & button {
    padding: 10px;
    background: #e0e0e0;
    border: 2px solid grey;
    border-radius: 5px;
    &:focus,
    &:hover {
      box-shadow: 0px 0 3px 0 #3167ff;
    }
  }
`

export const LayoutDiv = styled.div`
  display: grid;
  margin: 10px 0;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(620px, 1fr));

  @media screen and (min-width: 1250px) {
    & > *:first-child {
      justify-self: right;
    }
    & > *:last-child {
      justify-self: left;
    }
    ${StyledP5Canvas} {
      margin: 0;
    }
  }
`
