import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
//import { Link } from "gatsby"
import styled from "styled-components"
import "typeface-poppins"
import "typeface-roboto"
import Layout from "../components/layout"
//import SEO from "../components/seo"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 60px;
  align-items: justify-start;
  @media screen and (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    padding: 60px 0 30px 0;
  }
`

const Wrapper = styled.div`
  padding: 60px 50px;
  display: flex;
  flex-direction: column;
  width: 400px; 
  height: 550px; 
  justify-content: space-between;
  h3{
    color: #231f20;
    font-family: Poppins, sans-serif;
    padding-top: 15px;
    text-align: center;
  }
  img {
    border-radius: 15%;
  }
  @media screen and (max-width: 720px) {
    padding: 2em 3em;
  }
`

const Autor = (props) => (
  <Wrapper>
    <Img id={props.nome} fluid={props.imagem} />
    <Link to={props.slug}>
      <h3>{props.nome}</h3>
    </Link>
  </Wrapper>
)

const Autores = ({data}) => (
  <Layout>
    <Container>
      {data.allMarkdownRemark.edges.map(({node}) => (
        <Autor 
          key={node.id} 
          imagem={node.frontmatter.featuredImage.childImageSharp.fluid} 
          nome={node.frontmatter.nome} 
          id={node.id}
          slug={node.fields.slug} />
      ))}
    </Container>
  </Layout>
)

export default Autores

export const query = graphql`
query {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          nome
          featuredImage {
            childImageSharp {
              fluid (maxWidth: 400, maxHeight: 550) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
        fields {
          slug
        }
      }
    }
  }
}
`