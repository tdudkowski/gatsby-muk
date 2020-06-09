import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const IndexPage = () => (
  <div className="container">
    <SEO title="Home" />
    <section className="info">
      <article>
        <h2>Przewodnik po Wrocławiu</h2>
        <p>
          Via Wrocław - kompleksowe usługi turystyczne po Wrocławiu. Znajdziesz
          tu ciekawostki o stolicy Dolnego Śląska, zamówisz licencjonowanego
          przewodnika i wybierzesz odpowiednią trasę.
        </p>
        <p>
          Usługi w języku polskim, niemieckim, angielskim, rosyjskim oraz
          czeskim.
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
        <h2>Aktualności</h2>
        <section>
          <h3>Tytuł aktualności</h3>
          <p>
            Treść aktualności Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Eum commodi reiciendis voluptatibus. Quasi vitae
            maiores eum quod. Sit error impedit at neque, reprehenderit ratione,
            similique molestias veniam aliquid delectus blanditiis.
          </p>
        </section>
        <ul>
          <li>
            <Link to="news">więcej...</Link>
          </li>
        </ul>
      </section>
    </div>
  </div>
)

export default IndexPage
