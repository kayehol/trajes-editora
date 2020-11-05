import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
//import SEO from "../components/seo"
import styled from "styled-components"
import Img from "gatsby-image"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 120px 0;
  align-items: flex-end;
  a{
    color: #231f20;
  }
  height: 600px;
  @media screen and (max-width: 720px) {
    flex-direction: column;
    padding: 4em 1em;
    align-items: flex-start;
    height: auto;
  }
`

const Livro = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Poppins, sans-serif;
  padding: 0 2em;
  height: auto;
  width: 25%;
  margin: 0;
  h4 {
    padding: 0.8em 0;
  }
  img {
    border-radius: 15%;
  }
  @media screen and (max-width: 720px) {
    width: 100%;
    padding: 0 1em;
  }
`

const Loja = ({ data }) => (
  <Layout>
    <Container>
      {data.allWcProducts.edges.map(node => (
          <Livro key={node.node.id}>
            {console.log(node.node)}
            <Img fluid={node.node.images[0].localFile.childImageSharp.fluid} />
            <Link href={`https://trajeseditora.com.br/loja/produto/${node.node.slug}`}>
              <h4>{node.node.name}</h4>
            </Link>
            <h5>{node.node.categories[0].name}</h5>
            <p>R$ {node.node.price}</p>
          </Livro>
      ))}
    </Container>
  </Layout>
)

export default Loja

export const query = graphql`
  query {
    allWcProducts {
      edges {
        node {
          wordpress_id
          price
          name
          slug
          images {
            alt
            localFile {
              childImageSharp {
                fluid(maxWidth: 500, toFormat: JPG) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          categories {
            name
          }
        }
      }
    }
  }
`
