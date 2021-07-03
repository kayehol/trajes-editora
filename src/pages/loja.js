import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import Img from "gatsby-image"
import SEO from "../components/seo"
//import { GatsbyImage } from "gatsby-plugin-image"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4em 0 2em 0;
  align-items: flex-start;
  a{
    color: #231f20;
  }
  height: auto;
  @media screen and (max-width: 720px) {
    flex-direction: column;
    padding: 4em 1em;
    align-items: flex-start;
    height: auto;
    padding-top: 6em;
  }
`

const Livro = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Poppins, sans-serif;
  padding: 1em 2em;
  height: auto;
  width: 25%;
  margin: 0;
  h4 {
    padding: 0.8em 0;
  }
  img {
    border-radius: 10%;
  }
  :hover {
    scale: 1.02;
    cursor: pointer;
  }
  transition: scale 0.5s;
  @media screen and (max-width: 720px) {
    width: 100%;
    padding: 0 1em;
  }
`

const Loja = ({ data }) => (
  <Layout>
    <SEO title='Loja' />
    <Container>
      {data.allWcProducts.edges.map(node => (
          <Livro key={node.node.wordpress_id}>
            <Link href={`https://trajeseditora.com.br/loja/produto/${node.node.slug}`}>
              {node.node.images[0].localFile.childImageSharp !== null &&
                <Img fluid={node.node.images[0].localFile.childImageSharp.fluid} />
                //<GatsbyImage image={node.node.images[0].localFile.childImageSharp.gatsbyImageData} />
              }
              <h4>{node.node.name}</h4>
              <h5>{node.node.categories[0].name}</h5>
              <p>R$ {node.node.price}</p>
            </Link>
          </Livro>
      ))}
    </Container>
  </Layout>
)

export default Loja

export const query = graphql`
  query {
    allWcProducts (sort: {fields: date_created, order: DESC}) {
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
                fluid {
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
