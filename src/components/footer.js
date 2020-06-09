import React from "react"
import Nav from "./nav"

const Footer = () => (
  <footer>
    <Nav />
    <hr />
    <div>
      © {new Date().getFullYear()}, strona zbudowana na{" "}
      <a href="https://www.gatsbyjs.org">Gatsby</a>; projekt i realizacja{" "}
      <a href="http://dygresje.info">dygresje.info</a>
    </div>
  </footer>
)

export default Footer
