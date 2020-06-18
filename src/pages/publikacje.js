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
      <h3>Dolny Śląsk 10 najpiękniejszych wycieczek</h3>
      <section>
        <p>
          Miło mi poinformować, że ukazał się i jest już w sprzedaży mój
          przewodnik po Dolnym Śląsku! Postanowiłam wybrać i opisać
          najatrakcyjniejsze miejsca i obiekty naszego regionu.
        </p>
        <p>
          Wycieczki najwygodniej odbyć samochodem, jako bazę traktując Wrocław.
          Można też korzystać z książki na swój indywidualny sposób, komponując
          trasy zgodnie z zainteresowaniami i możliwościami czasowymi.
          Praktyczny przewodnik na pewno nam w tym pomoże, zachęcając do
          systematycznego poznawania regionu bogatego w zabytki, o wyjątkowych
          walorach krajobrazowych i przyrodniczy.
        </p>
        <p>
          Jestem z niego bardzo dumna – jest naprawdę śliczny i ciekawy.
          Polecam!
        </p>
        <p>
          Można go kupić w różnych punktach turystycznych i księgarniach. Dla
          osób spoza Wrocławia podaję link do aukcji na Allegro:{" "}
          <a href="http://allegro.pl/listing/user/listing.php?us_id=40123978">
            nieaktualny
          </a>
        </p>
        <p>
          Autorzy: Małgorzata Urlich-Kornacka (tekst), Stanisław Klimek
          (fotografie);
          <br />
          Format: 12,5 cm x 21,5 cm, Objętość: 216 str., Oprawa: broszurowa,
          Wersje językowe: polska, angielska, niemiecka
        </p>
        <p>
          Zamki, pałace, oryginalne świątynie, wielkie klasztory, zabytki
          techniki, gigantyczne sztolnie z okresu drugiej wojny światowej – to
          wszystko można spotkać na Dolnym Śląsku. Ale nie tylko! Na turystów
          czekają tutaj góry, jaskinie, formacje skalne, rezerwaty przyrody,
          ogrody i parki. Zapraszamy! Warto odkryć i poznać Dolny Śląsk.
        </p>
        <p>
          Przewodnik prowadzi przez najpiękniejsze zakątki regionu. Dzięki
          starannie opracowanym trasom wycieczek i specjalnie wybranym obiektom
          można poznać największe atrakcje Dolnego Śląska.
        </p>
      </section>
      <section>
        <Img fixed={data.dolnyslask2small.childImageSharp.fixed} />
        <Img fixed={data.dolnyslask1small.childImageSharp.fixed} />
      </section>
    </section>
    <section className="publikacje">
      <section>
        <h3>Na tropie zaginionego Breslau</h3>
        <p>Przewodnik na podstawie powieści Marka Krajewskiego </p>
        <p>
          Przewodnik Na tropie zaginionego Breslau to propozycja dla miłośników
          powieści kryminalnych Marka Krajewskiego oraz zwolenników
          nieszablonowego zwiedzania Wrocławia. Na przygotowanej trasie znajdują
          się bowiem nie tylko najczęściej odwiedzane miejsca stolicy Dolnego
          Śląska, ale również malownicze, nieco zapomniane zakątki. W
          przewodniku szlakiem radcy kryminalnego wrocławskiej policji Eberharda
          Mocka nie zabraknie ciekawostek historycznych dotyczących odwiedzanych
          miejsc, cytatów z powieści, reprodukcji starych kartek pocztowych z
          kolekcji autorki oraz odwołań do wydarzeń z powieści Marka
          Krajewskiego. Dzięki temu poczujemy atmosferę przedwojennego
          Wrocławia, czyli zaginionego Breslau, które – obok Mocka – jest bez
          wątpienia głównym bohaterem powieści kryminalnych i niniejszej
          publikacji.
        </p>
        <p>
          Autor: Małgorzata Urlich-Kornacka
          <br />
          Oprawa: miękka Ilość stron: 32 ISBN: 978-83-941447-0-8
          <br />
          Wydawca: Via Wrocław - Małgorzata Urlich-Kornacka
          http://allegro.pl/na-tropie-zaginionego-breslau-przewodnik-wroclaw-i5392628175.html
        </p>
      </section>
      <section>
        <Img fixed={data.mock1.childImageSharp.fixed} />
        <Img fixed={data.mock2.childImageSharp.fixed} />
      </section>
    </section>
    <section className="publikacje">
      <section>
        <h3>Przewodnik po Wrocławiu</h3>
        <p>
          Autor Małgorzata Urlich-Kornacka
          <br />
          Wydawnictwo VIA NOVA
          <br />
          Format zeszyt 16,5 x 23,5 cm (32 strony na papierze kredowym)
          <br />
          Fotografie 44 współczesne (Stanisław Klimek) 21 archiwalnych pocztówek
          (ze zbiorów Wydawnictwa oraz Autorki)
        </p>
        <p>
          Dostępne wersje językowe polska, angielska, niemiecka, rosyjska,
          włoska, francuska
        </p>
        <p>
          Idealny dla wszystkich, którzy będąc we Wrocławiu na jeden, dwa lub
          trzy dni chcą zobaczyć najpiękniejsze zakątki stolicy Dolnego Śląska.
          Ciekawy tekst, pełen informacji i anegdot oraz kolorowe zdjęcia i
          reprodukcje starych pocztówek, pozwolą w sposób łatwy i przyjemny
          zapoznać się z najciekawszymi zabytkami i parkami Wrocławia.
          Dodatkowym atutem jest mapka z zaznaczonymi opisanymi obiektami oraz
          galeria opisująca najsławniejszych Wrocławian. Przewodnik dostępny w
          pięciu wersjach językowych nadaje się również na prezent dla znajomych
          i gości.
        </p>
        <p>
          Zamówienia Wydawnictwo VIA NOVA ul. Kazimierza Wielkiego 39 50-077
          WROCŁAW tel. 71 344 23 77 fax 71 343 78 71 kom. 603 76 58 16
        </p>
      </section>
      <section>
        <Img fixed={data.dolnyslask2small.childImageSharp.fixed} />
        <Img fixed={data.dolnyslask1small.childImageSharp.fixed} />
      </section>
    </section>
    <section className="publikacje">
      <h3>Okolice Wrocławia. Nawigator turystyczny</h3>
      <p>Autor Małgorzata Urlich-Kornacka</p>
      <p>Wydawnictwo Carta Blanka</p>
      <p>Format zeszyt 15,5 x 23,5 cm (128 strony)</p>
      <p>
        W czasie wakacyjnych podróży i weekendowych wyjazdów każdy z nas szuka
        miejsc wyjątkowych – ciekawych, pełnych uroku, pozwalających wypocząć.
        We Wrocławiu i jego okolicach jest ich naprawdę wiele – warto odnaleźć
        figurki krasnali we Wrocławiu, zobaczyć zabytkowy magiel w Małym Muzeum
        Ludowym w Marcinowie, zagubić się labiryncie Błędnych Skał w Górach
        Stołowych, sprawdzić, jak pachną kwiaty w ogrodach zamku Książ, spojrzeć
        na Karkonosze ze szczytu Śnieżki, wejść na Święte Schody w Sośnicy,
        spróbować słynnych marcińskich rogali w Jaworze, poznać historię jednego
        ze śląskich krzyży pokutnych w Stanowicach, przejść Podziemną Trasą
        Turystyczną w Nowej Rudzie.
      </p>
      <p>
        Propozycje wycieczek, wspaniałe zamki, pałace, jaskinie, parki narodowe
        i krajobrazowe oraz inne ciekawostki krajoznawcze zachęcają do aktywnego
        wypoczynku.
      </p>
      <p>
        Nawigator zawiera również kilkanaście propozycji wycieczek po Wrocławiu
        i okolicach: od krótkich kilkugodzinnych wędrówek, przez całodniowe
        wyprawy, po długie eskapady. Informacje praktyczne pomogą znaleźć
        odpowiedni nocleg na trasie wycieczek oraz miejsce, gdzie można smacznie
        zjeść.
      </p>
      <p>W nawigatorze m.in.:</p>
      <ul>
        <li>11 propozycji wycieczek po Dolnym Śląsku</li>
        <li>
          szczegółowy plan Starego Miasta we Wrocławiu w skali 1:6000, z
          zaznaczonymi zabytkami, miejscami noclegowymi i gastronomią
        </li>
        <li>11 map wycieczek w dokładnej skali 1:200 000 i 1:250 000</li>
        <li>plany zabytkowych miast, zamków, mapy parków narodowych itp.</li>
        <li>przeglądowa mapa okolic Wrocławia w skali 1:500 000</li>
        <li>ponad 100 fotografii z opisywanych miejsc</li>
        <li>
          informacje turystyczne: muzea i inne miejsca przeznaczone do
          zwiedzania (adresy, godziny otwarcia, ceny biletów, nr telefonów itp.)
        </li>
        <li>baza noclegowa i gastronomiczna</li>
        <li>przyroda, zabytki, miejsca dla dzieci, imprezy cykliczne</li>
      </ul>

      <p>
        Wydawnictwo Carta Blanca Sp. z o.o. Grupa Wydawnicza PWN ul.
        Świętojerska 5/7 00-236 Warszawa tel. 22 695 45 55 fax 22 695 45 51
      </p>
      <p>
        Zamówienia Dział sprzedaży: Piotr Nitera dyrektor handlowy tel. 22 695
        45 50 kom. 508 024 781
      </p>
    </section>
    <section className="publikacje">
      <h3>
        Dom Handlowy "Feniks", dawny dom towarowy braci Baraschów - Przewodnik
      </h3>
      <section>
        <p>
          Monografia autorstwa Małgorzaty Urlich-Kornackiej poświęcona
          najstarszemu domowi handlowemu we Wrocławiu – popularnemu i lubianemu
          „Feniksowi”. Z jego działalnością wiąże się wiele ciekawych historii,
          anegdot i mitów, które narastały przez dziesiątki lat i sprawiły, że
          obiekt ten zyskał status wyjątkowej budowli na wrocławskim Rynku.
          Ciekawostek dotyczących tego obiektu jest tyle, że z planowanej
          początkowo małej broszurki powstała książka - bogato ilustrowana
          archiwalnymi pocztówkami, planami architekta Georga Schneidera oraz
          reklamami z dawnych gazet. Jeśli chcą Państwo dowiedzieć się, skąd
          pochodzili bracia Baraschowie, założyciele domu towarowego, na czym
          polegał ich handlowy sukces, co stało się ze szklanym globusem, który
          zdobił wieżyczkę obiektu od strony Rynku, czy ruchome schody były
          pierwszymi we Wrocławiu oraz co oznaczało słowo „futerko” w żargonie
          pracowników „Feniksa” – zapraszamy do lektury!
        </p>
        <p>
          Małgorzata Urlich-Kornacka "Dom handlowy FENIKS, dawny dom towarowy
          braci Baraschów" Wydawca: Via Nova; Liczba stron: 96; ISBN:
          978-83-64025-42-6 Na życzenie Kupującego książka z dedykacją i
          autografem autora!
        </p>
        <p>Kup przewodnik: Dom Handlowy "Feniks". Przewodnik.</p>
      </section>
      <section>
        <Img fixed={data.feniksokladka.childImageSharp.fixed} />
        <Img fixed={data.fenikstrescsmall.childImageSharp.fixed} />
      </section>
    </section>

    <section className="publikacje">
      <h3>"Śladami Klossa po Wrocławiu" - Przewodnik</h3>
      <section>
        <p>
          W jakim lokalu porucznik von Vormann wypowiada hasło o kasztanach z
          placu Pigalle? Gdzie znajduje się willa profesora Porschatta? A sztab
          generała von Boldta? W jakiej kamienicy mieszkała Christin Kield? Jak
          znaleźć mieszkanie radiotelegrafisty Weissa? Weź ze sobą książkę i
          podążaj tropem Klossa! Filmowe plenery na licznych zdjęciach
          archiwalnych i współczesnych, dokładne mapki z zaznaczonymi miejscami,
          gdzie pracowała ekipa „Stawki większej niż życie” pod kierunkiem
          Andrzeja Konica i Janusza Morgensterna, ciekawostki z planu, wycinki
          prasowe z okresu pracy filmowców we Wrocławiu
        </p>
        <p>
          Bogdan Bernacki "Śladami Klossa po Wrocławiu", Wydawca: Via Wrocław –
          Małgorzata Urlich-Kornacka; liczba stron: 56; ISBN: 978-83-941447-3-9
          Na życzenie Kupującego książka z dedykacją i autografem autora!
        </p>
        <p>Kup przewodnik: Przewodnik "Śladami Klossa po Wrocławiu"</p>
      </section>
      <section>
        <Img fixed={data.kloss1.childImageSharp.fixed} />
        <Img fixed={data.kloss2.childImageSharp.fixed} />
      </section>
    </section>
  </Layout>
)

export default PublikacjePage

export const pageQuery = graphql`
  query {
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
    wroclaw1: file(relativePath: { eq: "malgorzata-wroclaw1_small.jpg" }) {
      id
      childImageSharp {
        fixed(width: 220) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    wroclaw2: file(relativePath: { eq: "malgorzata-wroclaw2_small.jpg" }) {
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
  }
`
