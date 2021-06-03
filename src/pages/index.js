import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import "../styles/css/font-awesome.css"

const IndexPage = ({ data }) => (
  <div className="container">
    <SEO title="Home" />
    <section className="info">
      <article>
        <h2>Małgorzata Urlich-Kornacka – przewodnik po Wrocławiu</h2>
        <p>
          Witamy na stronie firmy Via Wrocław – Małgorzata Urlich-Kornacka. Oferujemy kompleksowe usługi
          turystyczne po Wrocławiu w języku polskim i niemieckim.</p>
        <p>Tutaj znajdziesz ciekawostki o stolicy
        Dolnego Śląska, zmówisz licencjonowanego przewodnika i wybierzesz trasę, która najbardziej
        odpowiada Twoim indywidualnym zainteresowaniom.
        </p>
        <div className="contactOnFront">
          <section><i className="fa fa-mobile" aria-hidden="true"></i>&nbsp;+48 607 239 776</section>
          <section><i className="fa fa-at" aria-hidden="true"></i>&nbsp;malgorzata.wroclove@gmail.com</section>
        </div>
      </article>

      <div className="newsOnFront">

        <Link to="kontakt"><h3>Kontakt</h3></Link>

        <Link to="/news">
          <h3>Aktualności</h3>
          <Img fixed={data.afiszsmall.childImageSharp.fixed} />
        </Link></div>
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
          <li>
            <Link to="wycieczki">Wycieczki</Link>
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
          title="facebook"
          width="100%"
          maxWidth="380"
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

export const indexQuery = graphql`
  query IndexImages {
        afiszsmall: file(
      relativePath: {eq: "afisz-zwrowtle_czerwiec_x300.jpg" }
    ) {
        id
      childImageSharp {
        fixed(width: 300) {
        ...GatsbyImageSharpFixed_withWebp
      }
      }
    }
  }
`
