import React from "react"
import Header from "./header"
import Aside from "./aside"
import Footer from "./footer"
import * as layoutStyles from "./layout.module.css"

const Layout = ({ children, page }) => {
  return (
    <div className={layoutStyles.container}>
      <Header />
      <main>
        <Aside page={page} />
        <article>{children}</article>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
