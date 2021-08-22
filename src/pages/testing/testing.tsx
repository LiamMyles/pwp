import { useEffect, useRef, useState } from "react"

class NGon {
  apples = 0
  constructor() {
    console.log("NGon constructed")
  }
  addApple(apple: number) {
    this.apples = apple
  }
}

class NGonJumps extends NGon {
  constructor() {
    console.log("NGon Jumps Constructed")
    super()
  }
}

export function Testing(): React.ReactElement {
  const [appleCount, setAppleCount] = useState(0)
  const [clickCount, setClickCount] = useState(0)
  const NGonInstance = useRef<null | NGon>(null)

  useEffect(() => {
    NGonInstance.current = new NGonJumps()
  }, [])

  console.log("Apples", NGonInstance.current?.apples)
  return (
    <>
      <h1>Hello</h1>
      <button onClick={() => setClickCount(clickCount + 1)}>
        Clicked Me : {clickCount}
      </button>
      <button
        onClick={() => {
          setAppleCount(appleCount + 1)
          NGonInstance.current?.addApple(appleCount + 1)
        }}
      >
        Apple Me : {appleCount}
      </button>
    </>
  )
}
