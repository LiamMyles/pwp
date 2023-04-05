import { useEffect, useRef, useState } from "react"
import { NGonAnimator } from "Src/sketches/nGonAnimator"
import { SpiralAnimator } from "Src/sketches/spiralAnimator"
import styled from "styled-components"

const PlaybackContainerDiv = styled.div`
  display: grid;
  grid-template-areas:
    "hr hr hr"
    "back play forward"
    "timeline timeline timeline";
  grid-gap: 10px;
  width: 600px;
  margin: 10px auto;
`

interface DrawingControlsProps {
  NGonAnimator:
    | React.MutableRefObject<NGonAnimator>
    | React.MutableRefObject<SpiralAnimator>
}

export function DrawingControls({
  NGonAnimator,
}: DrawingControlsProps): React.ReactElement {
  const [isPlaying, togglePlaying] = NGonAnimator.current.useTogglePlaying()
  return (
    <PlaybackContainerDiv>
      <hr style={{ gridArea: "hr", width: "100%" }} />
      <button
        style={{ gridArea: "back" }}
        onClick={() => {
          NGonAnimator.current.stepBack()
        }}
      >
        Step Back
      </button>
      <button
        style={{ gridArea: "play" }}
        onClick={() => {
          togglePlaying()
        }}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
      <button
        style={{ gridArea: "forward" }}
        onClick={() => {
          NGonAnimator.current.stepForward()
        }}
      >
        Step Forward
      </button>
      <div style={{ gridArea: "timeline", display: "grid" }}>
        {NGonAnimator.current && (
          <TimeLine
            NGonAnimator={NGonAnimator as React.MutableRefObject<NGonAnimator>}
          />
        )}
      </div>
    </PlaybackContainerDiv>
  )
}

const StyledProgress = styled.progress`
  width: 50%;
  height: 10px;
  background-color: white;
  margin: 10px auto;
  border: solid 1px grey;
  border-radius: 20px;
  overflow: hidden;

  /* necessary to style the progress bar background */
  ::-webkit-progress-bar {
    background-color: white;
  }

  &::-webkit-progress-value {
    transition: width 100ms;
    background-color: #1159a6;
  }
  &::-ms-fill {
    background-color: #1159a6;
    border: 0;
  }
`
interface TimeLineProps {
  NGonAnimator: React.MutableRefObject<NGonAnimator>
}

function TimeLine({ NGonAnimator }: TimeLineProps) {
  const requestedAnimationId = useRef(0)
  const [currentFramePercent, setCurrentFramePercent] = useState(0)

  useEffect(() => {
    let previousTimestamp = 0
    function increaseProgress(timestamp: number) {
      const currentPercentage =
        (NGonAnimator.current.currentAnimationTick /
          NGonAnimator.current.totalAnimationTicks) *
        100
      if (timestamp - previousTimestamp > 50) {
        previousTimestamp = timestamp
        if (currentFramePercent !== currentPercentage) {
          setCurrentFramePercent(currentPercentage)
        }
      }

      requestedAnimationId.current =
        window.requestAnimationFrame(increaseProgress)
    }

    window.requestAnimationFrame(increaseProgress)

    return () => {
      cancelAnimationFrame(requestedAnimationId.current)
    }
  }, [currentFramePercent])

  return (
    <>
      <label htmlFor="file">
        Drawing Progress: {Math.ceil(currentFramePercent)}%
      </label>
      <StyledProgress id="file" max={100} value={currentFramePercent} />
    </>
  )
}
