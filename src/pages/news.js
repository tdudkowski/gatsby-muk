import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NewsPage = ({ data }) => (
  <Layout>
    <SEO title="Aktualności" />

    <h2>Aktualności</h2>

    <p>Szanowni Państwo, ruszamy z nowym projektem pt. "Z Wrocławiem w tle", który obejmować będzie cztery spotkania literackie z wrocławskimi autorami oraz cztery wieczorne wycieczki tematyczne. Spotkania odbywać się będą w nowym Odra Centrum stojącym przy moście Grunwaldzkim. Spotkania i wycieczki są bezpłatne, obowiązują zapisy.</p>
    <p>Cykl poprowadzi: Małgorzata Urlich-Kornacka</p>
    <p>Wrocław jest bez wątpienia miastem literatury i ma się czym poszczycić. Nie przez przypadek został Światową Stolicą Książki UNESCO, a wiersz poety Tadeusza Różewicza stał się w 2016 roku oficjalnym hymnem i od tamtego czasu również oficjalną muzyczną wizytówką każdej kolejnej Światowej Stolicy Książki UNESCO. Liczne wydarzenia literackie skłoniły nas do przygotowania własnego projektu łączącego spotkania z autorami z tematycznymi wycieczkami i promocją niezwykłego miejsca na mapie Wrocławia – nowego Odra Centrum.</p>

    <p>Najbliższy termin 20-21 maja.</p>

    <ul>
      <li>20 maja, godz. 16.00; spotkanie z autorką Malwiną Ferenz - Odra Centrum.</li>
      <li>21 maja, godz. 17.00; spacer "Wrocław z dreszczykiem".</li>
    </ul>

    <strong>Zapraszamy!</strong>
    <hr />
    <ul className="listWithSquares">
      <li>Projekt finansowany przez Wrocławski Dom Literatury oraz Wydział Promocji Miasta i Turystyki Urzędu Miejskiego we Wrocławiu.</li>
      <li>Partnerzy projektu: <a href="https://przewodnicy.org">Stowarzyszenie TUiTAM</a> oraz Odra Centrum</li>
      <li><a href="https://visitwroclaw.eu/">Oficjalny Serwis Turystyczny Wrocławia - visitwroclaw.eu</a></li>
      <li><a href="https://literatura.wroclaw.pl/">Wrocławski Dom Literatury - literatura.wroclaw.pl</a></li>
    </ul>

    <div>
      <Img fixed={data.afisz_maj.childImageSharp.fixed} />
      <hr />
      <Img fixed={data.afisz_luty.childImageSharp.fixed} />
    </div>

  </Layout >
)

export default NewsPage


export const indexQuery = graphql`
  query NewsImages {
        afisz_maj: file(
      relativePath: {eq: "afisz-z_wroclawiem_w_tle-maj.jpg" }
    ) {
            childImageSharp {
        fixed(width: 640) {
        ...GatsbyImageSharpFixed_withWebp
      }
      }
    }
    afisz_luty: file(
      relativePath: {eq: "afisz-z_wroclawiem_w_tle.jpg" }
    ) {
            childImageSharp {
        fixed(width: 640) {
        ...GatsbyImageSharpFixed_withWebp
      }
      }
    }
  }
`
