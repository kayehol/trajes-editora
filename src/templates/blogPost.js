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
    padding: 30px 0;
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
  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2em 1em;
  }
`

const BlogPostTemplate = ({ data }) => (
  <Layout>
    <SEO
      title={data.wpPost.title}
      description={data.wpPost.excerpt}
    />
    <PostCompleto>
      <Link to="/blog">
        <img id="btVoltar" src={btVoltar} alt="voltar" />
      </Link>
      <h1>{data.wpPost.title}</h1>
      <p id="autorData">{data.wpPost.date}</p>

      <div
        id="conteudoPost"
        dangerouslySetInnerHTML={{ __html: data.wpPost.content }}
      />
    </PostCompleto>
  </Layout>
)

export default BlogPostTemplate

export const query = graphql`
  query($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      content
      excerpt
      date(formatString: "DD/MM/YYYY")
      featuredImage {
        node {
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
  }
`
