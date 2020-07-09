import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import btVoltar from "../images/voltar.png"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 60px 0 80px 0;
  #voltar{
    width: 20%;
    display: flex;
    justify-content: flex-end;
    padding: 0 20px 0 0;
    img {
      width: 64px;
      height: 64px;
    }
  }
  #autorGeral{
    display: flex;
    flex-direction: row;
    width: 80%;
    padding: 0;
    font-family: Poppins, sans-serif;
  }
  #nomeFoto{
    padding: 0;
    width: 30%;
    align-self: flex-end;
    h2{
      text-align: center;
      padding-top: 40px;
    }
    Img {
      width: 100%;
      border-radius: 15%;
    }
  }
  #infoLink{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    margin: auto;
    height: 100%;
    #bio {
      padding: 80px 60px 0 0;
    }
    #bio p {
      text-align: justify;
      padding: 20px 80px;
    }
    a {
      text-align: center;
      color: #000;
      padding: 5px 0;
    }
  }
`

export default function AutorInfo({ data }) {
  const autor = data.markdownRemark
  return (
    <Layout>
      <Container>
        <div id="voltar">
          <Link to="/autores">
            <img src={btVoltar} alt="voltar" />
          </Link>
        </div>
        <div id="autorGeral">
          <div id="nomeFoto">
            <Img
              id={autor.frontmatter.nome}
              fluid={autor.frontmatter.featuredImage.childImageSharp.fluid}
            />
            <h2>{autor.frontmatter.nome.toUpperCase()}</h2>
          </div>
          <div id="infoLink">
            <div id="bio" dangerouslySetInnerHTML={{ __html: autor.html }} />
            <a href="https://www.google.com">LINK 1</a>
            <a href="https://www.google.com">LINK 2</a>
            <a href="https://www.google.com">LINK 3</a>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        nome
        featuredImage {
          childImageSharp {
            fluid  {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    }
  }
`
