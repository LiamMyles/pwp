import Link from "next/link"
import styled from "styled-components"

const NavUl = styled.ul`
  display: flex;
  width: fit-content;
  gap: 10px;
  margin: 10px auto;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const BuyLink = styled.a`
  padding: 10px;
  border: solid 1px white;
  background: teal;
  color: white;
  border-radius: 999px;
  margin: 10px;
  font-size: 0.8rem;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  outline: none;
  &:focus,
  &:hover {
    background: white;
    color: teal;
    border-color: teal;
  }
`

export function Navigation(): React.ReactElement {
  return (
    <Nav>
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
      </NavUl>

      <BuyLink href="https://www.routledge.com/Electronic-String-Art-Rhythmic-Mathematics/Erfle/p/book/9781032512730">
        Buy the Book
      </BuyLink>
    </Nav>
  )
}
