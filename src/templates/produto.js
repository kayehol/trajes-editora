import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import btVoltar from "../images/voltar.png"
import SEO from "../components/seo"
import Img from "gatsby-image"


const Container = styled.div`
  padding: 100px 80px;
  display: flex;
  flex-direction: column;
  font-family: Poppins, sans-serif;
  #btVoltar {
    img {
      width: 64px;
      height: 64px;
    }
  }
  #autorGeral {
    display: flex;
    flex-direction: row;
    padding: 40px 0;
    width: 100%;
    #imgProduto {
      width: 33%;
    }
    #bioProduto {
      display: flex;
      flex-direction: column;
      padding: 0 20px;
      width: 43%;
      text-align: justify;
    }
    #infosProduto {
      display: flex;
      flex-direction: column;
      padding: 0 20px;
      width: 23%;
      ul {
        list-style-type: none;
        margin: 0;
        padding: 20px 0;
      }
      ul li {
        padding: 3px 0;
        margin: 0;
      }
    }
    button {
      background-color: #fff;
      border: 2px solid #dbc724;
      padding: 10px;
      margin-top: 20px;
      width: 100%;
      font-size: 1.3em;
      letter-spacing: 2px;
    }
    h4 {
      font-size: 1em;
    }
    #shortDescription {
      padding-top: 1.1em;
    }
    img {
      border-radius: 15%;
      padding: 0 1em 1em 1em;
    }
  }
`

const Produto = ({ data }) => (
  <Layout>
    <SEO
      title={data.wcProducts.name}
      description={data.wcProducts.short_description}
    />
    <Container>
      <div id="btVoltar">
        <Link to="/loja">
          <img src={btVoltar} alt="voltar" />
        </Link>
      </div>
      <div id="autorGeral">
        
        <Img
          fixed={data.wcProducts.images[1].localFile.childImageSharp.fixed}
        />
        <div id="bioProduto">
          <div id="headProduto">
            <h3>{data.wcProducts.name}</h3>
            <h4>{data.wcProducts.categories[0].name}</h4>
          </div>
          <div
            id="shortDescription"
            dangerouslySetInnerHTML={{
              __html: data.wcProducts.short_description,
            }}
          />
        </div>
        <div id="infosProduto">
          <h3>Informações</h3>
          <div
            id="description"
            dangerouslySetInnerHTML={{ __html: data.wcProducts.description }}
          />
          <Link 
            href={`https://trajeseditora.com.br/loja/produto/${data.wcProducts.slug}`}>
            <button>COMPRAR</button>
          </Link>
        </div>
      </div>
    </Container>
  </Layout>
)

export default Produto

export const query = graphql`
  query($id: Int!) {
    wcProducts(wordpress_id: { eq: $id }) {
      images {
        localFile {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      categories {
        name
      }
      name
      short_description
      slug
      description
      wordpress_id
    }
  }
`
