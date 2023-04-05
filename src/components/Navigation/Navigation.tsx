import Link from "next/link"
import styled from "styled-components"

const NavUl = styled.ul`
  display: flex;
  width: fit-content;
  gap: 10px;
  margin: 10px auto;
`

export function Navigation(): React.ReactElement {
  return (
    <nav>
      <NavUl>
        <li>
          <Link href="/">
            <a>NGon Animator</a>
          </Link>
        </li>
        <li>
          <Link href="/drawing-n-gon">
            <a>Draw NGon</a>
          </Link>
        </li>
        <li>
          <Link href="/spirals">
            <a>Spirals Animator</a>
          </Link>
        </li>
        <li>
          <Link href="/drawing-spirals">
            <a>Draw Spirals</a>
          </Link>
        </li>
        <li>
          <Link href="/sequence">
            <a>Sequence Player</a>
          </Link>
        </li>
      </NavUl>
    </nav>
  )
}
