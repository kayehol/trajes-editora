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
    
  }
  #voltar img {
      width: 64px;
      height: 64px;
  }
  #autorGeral{
    display: flex;
    flex-direction: row;
    width: 80%;
    height: 700px;
    padding: 0;
    font-family: Poppins, sans-serif;
    align-items: center;
  }
  #nomeFoto{
    padding: 0;
    width: 30%;
    height: 550px;
    align-items: center;
    text-align: center;
    justify-content: flex-end;
    h2{
      padding-top: 40px;
    }
    Img {
      border-radius: 15%;   
    }
  }
  #infoLink{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 70%;
    margin: auto;
    height: 100%;
  }
    
    #bio {
      padding: 80px 60px 0 0;
    }
    #bio p {
      text-align: justify;
      padding: 0 100px;
      font-size: 1.1em;
    }
    #bio a {
      color: #000;
      font-size: 1.1em;
      text-align: center;
      margin: 0;
      padding: 0;
    }
    @media screen and (max-width: 720px) {
      display: flex;
      flex-direction: column;
      padding: 0;
      margin: 0;
      height: auto;
      #voltar {
        justify-content: center;
        padding: 0;
        width: 100%;
      }
      #autorGeral {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
      }
      #nomeFoto {
        width: 90%;
        height: auto;
        justify-content: center;
      }
      #infoLink {
        width: 100%;
        height: auto;
      }
      #bio p {
        padding: 0;
      }
      #bio {
        padding: 2em 1em;
      }
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
            fluid(maxWidth: 300, maxHeight: 450)  {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
