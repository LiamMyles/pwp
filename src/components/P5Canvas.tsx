import React, { useEffect, useRef } from "react"
import type p5Type from "p5"

interface P5CanvasProps {
  sketch: (p5: p5Type) => void
  className?: string
}

export function P5Canvas({
  sketch,
  className,
}: P5CanvasProps): React.ReactElement {
  const divRef = useRef<HTMLDivElement>(null)
  const P5Ref = useRef<p5Type>()

  if (typeof window === "undefined") {
    return <div ref={divRef} className={className} />
  }

  useEffect(() => {
    let delay: NodeJS.Timeout
    ;(async () => {
      const p5 = (await import("p5")).default
      const node = divRef.current as HTMLDivElement
      if (P5Ref.current !== undefined) {
        P5Ref.current.remove()
      }
      //Add delay to help handle any excess renders
      delay = setTimeout(() => {
        const p5Instance = new p5(sketch, node)
        P5Ref.current = p5Instance
      }, 100)
    })()

    return () => {
      clearTimeout(delay)
      if (P5Ref?.current) {
        const P5Instance = P5Ref.current as p5Type
        P5Instance.remove()
      }
    }
  }, [P5Ref, divRef, sketch])

  return <div ref={divRef} className={className} />
}
