import React from "react"
import Header from "./header"
import Aside from "./aside"
import Footer from "./footer"
import layoutStyles from "./layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <Header />
      <main>
        <Aside />
        <article>{children}</article>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
