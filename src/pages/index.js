import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import "../styles/css/font-awesome.css"

const IndexPage = () => (
  <div className="container">
    <SEO title="Home" />
    <section className="info">
      <article>
        <h2>Przewodnik po Wrocławiu</h2>
        <p>
          Via Wrocław - Małgorzata Urlich-Kornacka kompleksowe usługi
          turystyczne po Wrocławiu. Znajdziesz tu ciekawostki o stolicy Dolnego
          Śląska, zamówisz licencjonowanego przewodnika i wybierzesz odpowiednią
          trasę.
        </p>
        <p>Usługi w języku polskim i niemieckim</p>
        <p>
          <i className="fa fa-mobile" aria-hidden="true"></i>&nbsp;607 239 776 |{" "}
          <i className="fa fa-at" aria-hidden="true"></i>
          &nbsp;malgorzata.wroclove@gmail.com
        </p>
      </article>
      <ul>
        <li>
          <a href="http://www.viawroclaw.com/rezerwacja.php">
            Rezerwacja wycieczki
          </a>
        </li>
        <li>
          <Link to="kontakt">Kontakt</Link>
        </li>
      </ul>
    </section>
    <div className="menu">
      <section className="about">
        <ul>
          <li>
            <Link to="o">O mnie</Link>
          </li>
          <li>
            <Link to="wroclaw">O Wrocławiu</Link>
          </li>
        </ul>
      </section>
      <section className="biz">
        <ul>
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
      </section>
      <section className="news">
        <h2>Facebook</h2>

        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffilmwroclaw%2F&tabs=timeline&width=380&height=380&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="380"
          height="320"
          styleName="border:none;overflow:hidden"
          scrolling="no"
          frameborder="0"
          allowTransparency="true"
          allow="encrypted-media"
        ></iframe>
      </section>
    </div>
  </div>
)

export default IndexPage
