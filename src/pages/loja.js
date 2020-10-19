import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
//import SEO from "../components/seo"
import styled from "styled-components"
import Img from "gatsby-image"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 120px;
  a{
    color: #231f20;
  }
`

const Livro = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Poppins, sans-serif;
  align-items: center;
`

const Loja = ({ data }) => (
  <Layout>
    <Container>
      {data.allWcProducts.edges.map(node => (
        <a href='https://trajeseditora.com.br/diabolo/' target='_blank' rel='noopener noreferrer'>
          <Livro key={node.node.id}>
            <Img fixed={node.node.images[1].localFile.childImageSharp.fixed} />
            <h4>{node.node.name}</h4>
            <h5>{node.node.categories[0].name}</h5>
            <p>R$ {node.node.price}</p>
          </Livro>
        </a>
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
                fixed(width: 300, toFormat: JPG) {
                  ...GatsbyImageSharpFixed
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
