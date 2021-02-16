import React from "react"
import { Link } from "gatsby"

const Aside = () => (
  <aside>
    <ul>
      <li>
        <Link to="/news">Aktualności</Link>
      </li>
      <li>
        <a href="http://przewodnicy.org/">TUiTAM</a>
      </li>
    </ul>
    <hr />
    <ul className="contact">
      <li>
        <Link to="/kontakt">Kontakt</Link>
      </li>
    </ul>
  </aside>
)

export default Aside
