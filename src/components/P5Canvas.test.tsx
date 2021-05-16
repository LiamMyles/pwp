import React, { useState, useEffect } from "react"
import { render, waitFor } from "@testing-library/react"
import p5 from "p5"
import type p5Type from "p5"

import { P5Canvas } from "./P5Canvas"

const mockP5RemoveFunction = jest.fn()
jest.mock("p5", () => {
  return jest.fn().mockImplementation(() => {
    return { remove: mockP5RemoveFunction }
  })
})

beforeEach(() => {
  const mockedP5 = p5 as unknown as jest.Mock<p5Type>
  mockP5RemoveFunction.mockClear()
  mockedP5.mockClear()
})

describe("P5Canvas Component", () => {
  it("should render run sketch, and remove on unmount", async () => {
    const { unmount } = render(<P5Canvas sketch={jest.fn()} />)
    await waitFor(() => {
      expect(p5).toHaveBeenCalledTimes(1)
    })
    expect(mockP5RemoveFunction).not.toHaveBeenCalled()
    unmount()
    expect(mockP5RemoveFunction).toHaveBeenCalledTimes(1)
  })
  it("should remove extra p5 instance when rendered with same key", async () => {
    const TestComponent: React.FC = () => {
      const [triggerRenderCounter, setTriggerRenderCounter] = useState(0)
      const [stopRendering, setStopRendering] = useState(false)

      useEffect(() => {
        let timeoutId: NodeJS.Timeout
        if (triggerRenderCounter !== 2) {
          timeoutId = setTimeout(() => {
            if (triggerRenderCounter === 1 && !stopRendering) {
              setTriggerRenderCounter(1)
              setStopRendering(true)
            } else {
              setTriggerRenderCounter(triggerRenderCounter + 1)
            }
          }, 100)
        }

        return () => {
          clearInterval(timeoutId)
        }
      }, [triggerRenderCounter, stopRendering])

      return (
        <>
          <p>Render Count: {triggerRenderCounter}</p>
          <P5Canvas sketch={jest.fn()} key="Same Key" />
        </>
      )
    }
    const { getByText } = render(<TestComponent />)

    await waitFor(() =>
      expect(getByText("Render Count: 2")).toBeInTheDocument()
    )

    expect(mockP5RemoveFunction).toHaveBeenCalledTimes(4)
  })
})
