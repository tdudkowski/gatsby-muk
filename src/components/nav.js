import React from "react"
import { Link } from "gatsby"

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Strona główna</Link>
      </li>
      <li>
        <Link to="o">O mnie</Link>
      </li>
      <li>
        <Link to="wroclaw">O Wrocławiu</Link>
      </li>
      <li>
        <Link to="wycieczki">Wycieczki!</Link>
      </li>
      <li>
        <Link to="publikacje">Publikacje</Link>
      </li>
      <li>
        <Link to="deutsch">Deutsch</Link>
      </li>
    </ul>
  </nav>
)

export default Nav
