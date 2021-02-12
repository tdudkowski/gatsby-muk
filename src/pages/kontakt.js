import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/css/font-awesome.css"

const KontaktPage = () => (
  <Layout>
    <SEO title="Kontakt" />
    <h2>Kontakt</h2>
    <p>
      Zapraszamy do współpracy firmy, instytucje oraz biura turystyczne. Gwarantujemy fachową obsługę,
      oryginalny i ciekawy sposób oprowadzania. Oferujemy usługi w języku polskim i niemieckim.
      Wystawiamy faktury.
    </p>

    <div className="contact-card">
      <section>
        Via Wrocław-Małgorzata Urlich-Kornacka
        <br />
        ul. Budziszyńska 27a/26
        <br />
        54-434 Wrocław
        <br />
        NIP: 616-139-17-82
      </section>
      <section>
        <i className="fa fa-mobile" aria-hidden="true"></i>&nbsp;607 239 776
        <br />
        <i className="fa fa-at" aria-hidden="true"></i>
        &nbsp;malgorzata.wroclove@gmail.com
        <br />
        Jesteśmy na facebooku:{" "}
        <a href="https://pl-pl.facebook.com/stowarzyszenieTUiTAM">
          Stowarzyszenie TUiTAM
        </a>
      </section>
    </div>
    <form
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="contact"
    >
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
  </Layout>
)

export default KontaktPage
