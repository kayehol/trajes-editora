import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 60px 120px;
`

const Livro = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Poppins, sans-serif;
    align-items: center;
`

const Loja = ({data}) => (
  <Layout>
    <Container>
        {data.allWcProducts.edges.map((node) => (
            <Livro>
                <h3>Capa</h3>
                <h4>{node.node.name}</h4>
                <h5>Nilton Resende</h5>
                <p>R$ {node.node.price}</p>
            </Livro>
        ))}
    </Container>
  </Layout>
)

export default Loja

export const query = graphql`
query allProducts {
    allWcProducts {
      edges {
        node {
          id
          wordpress_id
          name
          categories {
            wordpress_id
          }
          images {
            name
            id
            alt
            src
          }
          price
        }
      }
    }
  }
`
