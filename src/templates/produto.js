import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import btVoltar from "../images/voltar.png"
import SEO from "../components/seo"
import Img from "gatsby-image"
//import mercadopago from "../components/mercadopago"

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
      padding: 0 40px;
      width: 33%;
    }
    #infosProduto {
      display: flex;
      flex-direction: column;
      padding: 0 20px;
      width: 33%;
      ul {
        list-style-type: none;
        margin: 0;
        padding: 20px 0;
      }
      ul li {
        padding: 6px 0;
        margin: 0;
      }
    }
    button {
      background-color: #fff;
      border: 4px solid #dbc724;
      padding: 10px 40px;
      font-weight: bold;
    }
  }
`
/*
class Checkout extends React.Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        {mercadopago}
      </div>
    )
  }
}
*/

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
          <h3>INFOS</h3>
          <div
            id="description"
            dangerouslySetInnerHTML={{ __html: data.wcProducts.description }}
          />
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
      description
      wordpress_id
    }
  }
`
