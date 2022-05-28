import { useEffect, useRef, useState } from "react"
import { SketchNGonDrawer } from "Src/sketches/sketchGeneral"
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
  NGonDrawer: React.MutableRefObject<SketchNGonDrawer>
  lineDensity: number
}

export function DrawingControls({
  NGonDrawer,
  lineDensity,
}: DrawingControlsProps): React.ReactElement {
  return (
    <PlaybackContainerDiv>
      <hr style={{ gridArea: "hr", width: "100%" }} />
      <button
        style={{ gridArea: "back" }}
        onClick={() => {
          NGonDrawer.current.stepBack(1)
        }}
      >
        Step Back
      </button>
      <button
        style={{ gridArea: "play" }}
        onClick={() => {
          NGonDrawer.current.togglePlay()
        }}
      >
        Pause/Play
      </button>
      <button
        style={{ gridArea: "forward" }}
        onClick={() => {
          NGonDrawer.current.stepForward(1)
        }}
      >
        Step Forward
      </button>
      <div style={{ gridArea: "timeline", display: "grid" }}>
        {NGonDrawer.current && (
          <TimeLine
            drawingClass={
              NGonDrawer as React.MutableRefObject<SketchNGonDrawer>
            }
            maxLines={lineDensity}
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
  &::-moz-progress-bar {
    transition: padding-bottom 100ms;
    padding-left: 60px;
    padding-bottom: var(--value);
    background-color: #1159a6;
    height: 0;
    transform-origin: 0 0;
    transform: rotate(-90deg) translateX(-60px);
  }
  &::-ms-fill {
    background-color: #1159a6;
    border: 0;
  }
`
interface TimeLineProps {
  drawingClass: React.MutableRefObject<SketchNGonDrawer>
  maxLines: number
}

function TimeLine({ drawingClass, maxLines }: TimeLineProps) {
  const requestedAnimationId = useRef(0)
  const [currentFrame, setCurrentFrame] = useState(0)

  useEffect(() => {
    let previousTimestamp = 0
    function increaseProgress(timestamp: number) {
      if (timestamp - previousTimestamp > 50) {
        previousTimestamp = timestamp
        if (currentFrame !== drawingClass.current.currentLineDrawn) {
          setCurrentFrame(drawingClass.current.currentLineDrawn)
        }
      }

      requestedAnimationId.current =
        window.requestAnimationFrame(increaseProgress)
    }

    window.requestAnimationFrame(increaseProgress)

    return () => {
      cancelAnimationFrame(requestedAnimationId.current)
    }
  }, [currentFrame])

  return (
    <>
      <label htmlFor="file">Drawing progress: {currentFrame}</label>
      <StyledProgress id="file" max={maxLines - 1} value={currentFrame} />
    </>
  )
}
