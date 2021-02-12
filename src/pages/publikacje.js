import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import "../styles/sub.css"

const PublikacjePage = ({ data }) => (
  <Layout>
    <SEO title="Publikacje" />
    <h2>Publikacje</h2>
    <section className="publikacje">
      <section>
        <h3>„Przewodnik po Wrocławiu” (Via Nova, 2006; wersja uaktualniona w roku 2019)</h3>
        <p>
          Idealny dla wszystkich, którzy będąc we Wrocławiu na jeden, dwa lub trzy dni, chcą zobaczyć
          najpiękniejsze zakątki stolicy Dolnego Śląska. Tekst, pełen informacji i anegdot, oraz kolorowe zdjęcia
          i reprodukcje starych pocztówek ze zbiorów wydawnictwa oraz autorki pozwolą w sposób łatwy i
          przyjemny zapoznać się z najciekawszymi zabytkami Wrocławia. Przewodnik dostępny w kilku
          wersjach językowych.
        </p>
        <p>
          Autorzy: Małgorzata Urlich-Kornacka (tekst), Stanisław Klimek (fotografie)
         </p>
        <p>
          Wydawca: Via Nova 2006; wersja uaktualniona w roku 2019; liczba stron: 32 </p>
        <p>
          Dostępne wersje językowe polska, angielska, niemiecka, rosyjska,
          włoska, francuska
        </p>
      </section>
      <section>
        <Img fixed={data.wroclaw1.childImageSharp.fixed} />
        <Img fixed={data.wroclaw2.childImageSharp.fixed} />
      </section>
    </section>

    <section className="publikacje">
      <section>
        <h3>„Na tropie zaginionego Breslau. Przewodnik na podstawie powieści Marka Krajewskiego” (Via
Wrocław, 2017)</h3>
        <p>
          Propozycja dla miłośników powieści kryminalnych Marka Krajewskiego oraz zwolenników
          nieszablonowego zwiedzania Wrocławia. Na przygotowanej trasie znajdują się bowiem nie tylko
          najczęściej odwiedzane miejsca stolicy Dolnego Śląska, ale również malownicze, nieco zapomniane
          zakątki. W przewodniku szlakiem radcy kryminalnego wrocławskiej policji Eberharda Mocka nie
          zabraknie ciekawostek historycznych dotyczących odwiedzanych miejsc, cytatów z powieści,
          reprodukcji starych kartek pocztowych z kolekcji autorki oraz odwołań do wydarzeń z powieści Marka
          Krajewskiego. Dzięki temu poczujemy atmosferę przedwojennego Wrocławia, czyli zaginionego
          Breslau, które – obok Mocka – jest bez wątpienia głównym bohaterem powieści kryminalnych i
          niniejszej publikacji.
        </p>
        <p>
          Autor: Małgorzata Urlich-Kornacka
         </p><p>
          Wydawca: Via Nova; liczba stron: 42; wersje językowe: polska, niemiecka
                  </p>
      </section>
      <section>
        <Img fixed={data.mock1.childImageSharp.fixed} />
        <Img fixed={data.mock2.childImageSharp.fixed} />
      </section>
    </section>

    <section className="publikacje">
      <h3>„Śladami Klossa po Wrocławiu” (Via Wrocław, 2017)</h3>
      <section>
        <p>
          W jakim lokalu porucznik von Vormann wypowiada hasło o kasztanach z placu Pigalle? Gdzie znajduje
          się willa profesora Porschatta? A sztab generała von Boldta? W jakiej kamienicy mieszkała Christin
          Kield? Jak znaleźć mieszkanie radiotelegrafisty Weissa? Weź ze sobą książkę i podążaj tropem Klossa!
          Filmowe plenery na licznych zdjęciach archiwalnych i współczesnych, dokładne mapki z zaznaczonymi
          miejscami, gdzie pracowała ekipa „Stawki większej niż życie” pod kierunkiem Andrzeja Konica i
          Janusza Morgensterna, ciekawostki z planu, wycinki prasowe z okresu pracy filmowców we
          Wrocławiu.
        </p>
        <p>
          Autor: Bogdan Bernacki<br />

        </p>
        <p>Wydawca: Via Wrocław – Małgorzata Urlich-Kornacka; liczba stron: 56</p>
      </section>
      <section>
        <Img fixed={data.kloss1.childImageSharp.fixed} />
        <Img fixed={data.kloss2.childImageSharp.fixed} />
      </section>
    </section>

    <section className="publikacje">
      <h3>„Dom Handlowy «Feniks». Dawny dom towarowy braci Baraschów” (Via Nova, 2019)</h3>
      <section>
        <p>
          Monografia poświęcona najstarszemu domowi handlowemu we Wrocławiu – popularnemu i
          lubianemu „Feniksowi”. Z jego działalnością wiąże się wiele ciekawych historii, anegdot i mitów, które
          narastały przez dziesiątki lat i sprawiły, że obiekt ten zyskał status wyjątkowej budowli na
          wrocławskim Rynku. Ciekawostek dotyczących tego obiektu jest tyle, że z planowanej początkowo
          małej broszurki powstała książka – bogato ilustrowana archiwalnymi pocztówkami, planami
          architekta Georga Schneidera oraz reklamami z dawnych gazet. Jeśli chcą Państwo dowiedzieć się,
          skąd pochodzili bracia Baraschowie, założyciele domu towarowego, na czym polegał ich handlowy
          sukces, co stało się ze szklanym globusem, który zdobił wieżyczkę obiektu od strony Rynku,
          przeczytać o pierwszych we Wrocławiu ruchomych schodach albo dowiedzieć się, co oznaczało w
          żargonie pracowników „Feniksa” słowo „futerko”, koniecznie sięgnijcie po tę książkę.
        </p>
        <p>
          Autor: Małgorzata Urlich-Kornacka
          </p><p>
          Wydawca: Via Nova; liczba stron: 96
        </p>
      </section>
      <section>
        <Img fixed={data.feniksokladka.childImageSharp.fixed} />
        <Img fixed={data.fenikstrescsmall.childImageSharp.fixed} />
      </section>
    </section>

    <section className="publikacje">
      <h3>„Dolny Śląsk. 10 najpiękniejszych wycieczek” (Via Nova, 2015)</h3>
      <section>
        <p>
          Zamki, pałace, oryginalne świątynie, wielkie klasztory, zabytki techniki, gigantyczne sztolnie z okresu
          drugiej wojny światowej – to wszystko można zobaczyć na Dolnym Śląsku. I nie tylko to! Na turystów
          czekają tutaj góry, jaskinie, formacje skalne, rezerwaty przyrody, ogrody i parki. Zapraszamy! Warto
odkryć i poznać Dolny Śląsk. </p>
        <p>
          Przewodnik prowadzi przez najpiękniejsze zakątki regionu. Dzięki starannie opracowanym trasom
          wycieczek i specjalnie wybranym obiektom można poznać największe atrakcje Dolnego Śląska.
        </p>
        <p>
          Autorzy: Małgorzata Urlich-Kornacka (tekst), Stanisław Klimek (fotografie) </p>
        <p>
          Wydawca: Via Nova; liczba stron: 216; wersje językowe: polska, niemiecka, angielska
        </p>
      </section>
      <section>
        <Img fixed={data.dolnyslask1small.childImageSharp.fixed} />
        <Img fixed={data.dolnyslask2small.childImageSharp.fixed} />
      </section>
    </section>


    <section className="publikacje">
      <h3>„Okolice Wrocławia. Nawigator turystyczny” (Carta Blanca, 2008)</h3>
      <section>
        <p>
          Każdy z nas szuka miejsc wyjątkowych – ciekawych, pełnych uroku, pozwalających wypocząć. We
          Wrocławiu i jego okolicach jest ich naprawdę wiele – warto odnaleźć figurki krasnali we Wrocławiu,
          zobaczyć zabytkowy magiel w Małym Muzeum Ludowym w Marcinowie, zagubić się labiryncie
          Błędnych Skał w Górach Stołowych, wejść na Święte Schody w Sośnicy, spróbować słynnych
          wypieków w Jaworze, poznać historię jednego ze śląskich krzyży pokutnych w Stanowicach, przejść
          Podziemną Trasą Turystyczną w Nowej Rudzie. Nawigator zawiera kilkanaście propozycji wycieczek
          po Wrocławiu i okolicach.
      </p>
        <p>
          Autor Małgorzata Urlich-Kornacka </p>
        <p>
          Wydawca: Carta Blanka; liczba stron: 128
</p>
      </section>
      <section>
        <Img fixed={data.wro_okolice1.childImageSharp.fixed} />
        <Img fixed={data.wro_okolice2.childImageSharp.fixed} />
      </section>
    </section>


  </Layout>
)

export default PublikacjePage

export const pageQuery = graphql`
  query Images {
    dolnyslask1small: file(
      relativePath: { eq: "malgorzata-dolnyslask1_small.jpg" }
    ) {
      id
      childImageSharp {
        fixed(width: 220) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    dolnyslask2small: file(
      relativePath: { eq: "malgorzata-dolnyslask2_small.jpg" }
    ) {
      id
      childImageSharp {
        fixed(width: 220) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    mock1: file(relativePath: { eq: "malgorzata-mock1_small.jpg" }) {
      id
      childImageSharp {
        fixed(width: 220) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    mock2: file(relativePath: { eq: "malgorzata-mock2_small.jpg" }) {
      id
      childImageSharp {
        fixed(width: 220) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    wroclaw1: file(relativePath: { eq: "przew_wroclaw_cover.jpg" }) {
      id
      childImageSharp {
        fixed(width: 220) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    wroclaw2: file(relativePath: { eq: "przew_wroclaw_content.jpg" }) {
      id
      childImageSharp {
        fixed(width: 220) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    feniksokladka: file(relativePath: { eq: "feniks_okladka.jpg" }) {
      id
      childImageSharp {
        fixed(width: 220) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fenikstrescsmall: file(relativePath: { eq: "feniks_tresc_small.jpg" }) {
      id
      childImageSharp {
        fixed(width: 220) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    kloss1: file(relativePath: { eq: "kloss_okladka_small.jpg" }) {
      id
      childImageSharp {
        fixed(width: 220) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    kloss2: file(relativePath: { eq: "kloss_tresc_small.jpg" }) {
      id
      childImageSharp {
        fixed(width: 220) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    wro_okolice1: file(relativePath: { eq: "okolice_wroc_cover.jpg" }) {
      id
      childImageSharp {
        fixed(width: 220) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    wro_okolice2: file(relativePath: { eq: "okolice_wroc_content.jpg" }) {
      id
      childImageSharp {
        fixed(width: 220) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
