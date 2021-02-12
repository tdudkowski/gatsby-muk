import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NewsPage = ({ data }) => (
  <Layout>
    <SEO title="Aktualności" />

    {/* {data.allWordpressPost.edges.map(({ node }) => (
      <section>
        <h4>{node.title}</h4>
        <p>{node.content}</p>
        <p>{node.id}</p>
      </section>
    ))} */}

    <h2>Aktualności</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit pariatur
      aperiam nobis? Excepturi dolorem tempore facilis esse omnis vitae quidem.
      Consectetur esse illo vero porro necessitatibus dolorem assumenda
      veritatis? Assumenda.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit pariatur
      aperiam nobis? Excepturi dolorem tempore facilis esse omnis vitae quidem.
      Consectetur esse illo vero porro necessitatibus dolorem assumenda
      veritatis? Assumenda.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit pariatur
      aperiam nobis? Excepturi dolorem tempore facilis esse omnis vitae quidem.
      Consectetur esse illo vero porro necessitatibus dolorem assumenda
      veritatis? Assumenda.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit pariatur
      aperiam nobis? Excepturi dolorem tempore facilis esse omnis vitae quidem.
      Consectetur esse illo vero porro necessitatibus dolorem assumenda
      veritatis? Assumenda.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit pariatur
      aperiam nobis? Excepturi dolorem tempore facilis esse omnis vitae quidem.
      Consectetur esse illo vero porro necessitatibus dolorem assumenda
      veritatis? Assumenda.
    </p>
  </Layout>
)

export default NewsPage

// export const pageQuery = graphql`
//   query MyQuery {
//     // allWordpressPost {
//     //   edges {
//     //     node {
//     //       title
//     //       content
//     //       id
//     //       date
//     //     }
//     //   }
//     // }
//   }
// `
