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
  width: 100%;
  padding-top: 60px;
  align-items: center;
`

const Wrapper = styled.div`
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 600px;
  h3{
    color: #231f20;
    font-family: Poppins, sans-serif;
    padding-top: 15px;
    text-align: center;
  }
  Img {
    border-radius: 15%;
  }
`

const Autor = (props) => (
  <Wrapper>
    <Link to={props.slug}>
      <Img id={props.nome} fluid={props.imagem} />
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
              fluid(maxWidth: 244, maxHeight: 300) {
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
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