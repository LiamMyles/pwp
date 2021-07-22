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
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/spirals">
            <a>Spirals</a>
          </Link>
        </li>
      </NavUl>
    </nav>
  )
}
