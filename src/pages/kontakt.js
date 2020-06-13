import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const KontaktPage = () => (
  <Layout>
    <SEO title="Kontakt" />
    <h2>Kontakt</h2>
    <p>
      Witamy na oficjalnej stronie firmy Via Wrocław, która oferuje kompleksowe
      usługi turystyczne po Wrocławiu.
    </p>

    <p>
      Na stronie www.viawroclaw.com znajdziesz ciekawostki o stolicy Dolnego
      Śląska, zmówisz licencjonowanego przewodnika i wybierzesz trasę, która
      najbardziej odpowiada Twoim indywidualnym potrzebom.{" "}
    </p>
    <p>
      Oferujemy usługi w języku polskim, niemieckim, angielskim, rosyjskim oraz
      czeskim.
    </p>
    <p>
      Zapraszamy do współpracy firmy, instytucje oraz biura turystyczne.
      Gwarantujemy fachową obsługę, młodych, energicznych i pełnych pasji
      przewodników, zrzeszonych w Stowarzyszeniu Podróżników TUITAM, oryginalny
      sposób oprowadzania i pełne zadowolenie klienta.
    </p>

    <form method="post" action="https://formspree.io/xeqrkrqa" name="contact">
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <h3>Kontakt</h3>
      <label>
        <span>E-mail (opcjonalnie)</span>
        <input type="email" name="_replyto" id="_replyto" />
      </label>
      <label>
        <span>Wiadomość (wymagane)</span>
        <textarea name="message" id="message" rows="5" required />
      </label>
      <div>
        <button type="submit" className="btn">
          Wyślij
        </button>
        <input type="reset" value="Wyczyść formularz" className="btn" />
      </div>
    </form>
    <p>
      Wycieczka w języku czas trwania cena polskim do 1 godziny do 3,5 godzin
      każda następna godzina 100 zł 225 zł 50 zł obcym do 1 godziny do 3,5
      godzin każda następna godzina 150 zł 300 zł 80 zł Całodzienny pilotaż w
      języku polskim lub niemieckim: 300 zł
    </p>
  </Layout>
)

export default KontaktPage
