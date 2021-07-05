import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Video from "../components/video"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NewsPage = ({ data }) => (
  <Layout>
    <SEO title="Aktualności" />

    <h2>Aktualności</h2>

    <p>Szanowni Państwo, ruszamy z nowym projektem pt. "Z Wrocławiem w tle", który obejmować będzie cztery spotkania literackie z wrocławskimi autorami oraz cztery wieczorne wycieczki tematyczne. Spotkania odbywać się będą w nowym Odra Centrum stojącym przy moście Grunwaldzkim. Spotkania i wycieczki są bezpłatne, obowiązują zapisy.</p>
    <p>Cykl prowadzi: Małgorzata Urlich-Kornacka</p>

    <p>Wrocław jest bez wątpienia miastem literatury i ma się czym poszczycić. Nie przez przypadek został Światową Stolicą Książki UNESCO, a wiersz poety Tadeusza Różewicza stał się w 2016 roku oficjalnym hymnem i od tamtego czasu również oficjalną muzyczną wizytówką każdej kolejnej Światowej Stolicy Książki UNESCO.</p>

    <p>Liczne wydarzenia literackie skłoniły nas do przygotowania własnego projektu łączącego spotkania z autorami z tematycznymi wycieczkami i promocją niezwykłego miejsca na mapie Wrocławia – nowego Odra Centrum.</p>

    <p>Poprzednie spotkanie miało miejsce 24-25 czerwca 2021, jeszcze w lipcu planowane jest następne.</p>

    <ul>
      <li>24 czerwca, godz. 16.00; spotkanie z wrocławską autorką Jolantą Marią Kaletą - Odra Centrum.</li>
      <li>25 czerwca, godz. 17.00; spacer "Złoto Wrocławia. Między faktami a fikcją literacką".</li>
    </ul>

    <section className="videos">

      <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/QTtAjLO0vK0" videoTitle='"Spacer literacki na podstawie powieści Jolanty Marii Kalety" [11:41]' /><div>"Spacer literacki na podstawie powieści Jolanty Marii Kalety" [11:41]</div></div>

      <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/J1jnpgsApe4" videoTitle='"Spotkanie literackie z Jolantą Marią Kaletą w ramach projektu "Z Wrocławiem w tle"" [1:02:29]' /><div>"Spotkanie literackie z Jolantą Marią Kaletą w ramach projektu "Z Wrocławiem w tle"" [1:02:29]</div></div>

    </section>

    <h3>Poprzednie wydarzenia</h3>


    <section className="videos">
      <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/PYpKGcrwpIc" videoTitle='"Spacer literacki na podstawie powieści Malwiny Ferenz" [12:41]' /><div>"Spacer literacki na podstawie powieści Malwiny Ferenz" [12:41]</div></div>

      <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/PA27QdiequQ" videoTitle='"Spotkanie literackie z Malwiną Ferenz w ramach projektu "Z Wrocławiem w tle" [58:12]' /><div>"Spotkanie literackie z Malwiną Ferenz w ramach projektu "Z Wrocławiem w tle"" [58:12]</div></div>

      <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/Wfz4xaZrpuY" videoTitle='"Spacer literacki „Kryminalny Wrocław kobiecym okiem" na podstawie powieści Nadii Szagdaj" [8:36]' /><div>"Spacer literacki „Kryminalny Wrocław kobiecym okiem" na podstawie powieści Nadii Szagdaj" [8:36]</div></div>

      <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/oYJIqdKD1wI" videoTitle='"Spotkanie literackie z Nadią Szagdaj w ramach projektu "Z Wrocławiem w tle"" [1:12:08]' /><div>"Spotkanie literackie z Nadią Szagdaj w ramach projektu "Z Wrocławiem w tle"" [1:12:08]</div></div>
    </section>

    <hr />
    <ul className="listWithSquares">
      <li>Projekt finansowany przez Wrocławski Dom Literatury oraz Wydział Promocji Miasta i Turystyki Urzędu Miejskiego we Wrocławiu.</li>
      <li>Partnerzy projektu: <a href="https://przewodnicy.org">Stowarzyszenie TUiTAM</a> oraz Odra Centrum</li>
      <li><a href="https://visitwroclaw.eu/">Oficjalny Serwis Turystyczny Wrocławia - visitwroclaw.eu</a></li>
      <li><a href="https://literatura.wroclaw.pl/">Wrocławski Dom Literatury - literatura.wroclaw.pl</a></li>
    </ul>

    <hr />

    <Img fixed={data.afisz_czerwiec.childImageSharp.fixed} />
    <section>
      <Img fixed={data.afisz_maj.childImageSharp.fixed} />

      <Img fixed={data.afisz_luty.childImageSharp.fixed} />
    </section>

  </Layout >
)

export default NewsPage


export const indexQuery = graphql`
  query NewsImages {
    afisz_czerwiec: file(
      relativePath: {eq: "afisz-zwrowtle_czerwiec_x960.jpg" }
    ) {
            childImageSharp {
        fixed(width: 640) {
        ...GatsbyImageSharpFixed_withWebp
      }
      }
    }
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
