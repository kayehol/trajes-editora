import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import btVoltar from "../images/voltar.png"
//import Img from 'gatsby-image'

const PostCompleto = styled.div`
  padding: 100px 240px 50px;
  font-family: Poppins, sans-serif;
  #autorData {
    font-size: 0.8em;
    padding: 0;
  }
  #conteudoPost {
    font-size: 1em;
    padding: 40px 0;
  }
  h1 {
    font-weight: bold;
    padding: 20px 0;
  }
  #voltar {
    margin: auto;
  }
  img {
    width: 64px;
    height: 64px;
  }
`

const BlogPostTemplate = ({ data }) => (
  <Layout>
    <SEO
      title={data.wordpressPost.title}
      description={data.wordpressPost.excerpt}
    />
    <PostCompleto>
      <Link to="/blog">
        <img id="btVoltar" src={btVoltar} alt="voltar" />
      </Link>
      <h1>{data.wordpressPost.title}</h1>
      <p id="autorData">
        Escrito por {data.wordpressPost.author.name} on{" "}
        {data.wordpressPost.date}
      </p>
      
      <div
        id="conteudoPost"
        dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
      />
    </PostCompleto>
  </Layout>
)

export default BlogPostTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      date(formatString: "DD MM, YYYY")
      author {
        name
      }
      featured_media {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
