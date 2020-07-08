import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.min.css"
import "typeface-poppins"
import "typeface-roboto"
import Carousel from "react-bootstrap/Carousel"
import logoSolares from "../images/logoSolares.png"
import logoLunares from "../images/logoLunares.png"
import logoDestaque from "../images/trajes.png"
import livroDestaque from "../images/livroDestaque.png"
//import Image from "../components/image"
//import SEO from "../components/seo"

const Home = styled.div`
  z-index: 0;
  width: 100%;
  margin: auto;
`

const Selo = props => (
  <SeloWrapper>
    <div id="logoSelo">
      <img src={props.image} alt="logo" />
    </div>
    <div id="apresentacao">
      <p>{props.texto}</p>
      <button>IR PARA LOJA</button>
    </div>
  </SeloWrapper>
)

const SeloWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: #231f20;
  font-family: Poppins, sans-serif;
  padding: 60px 40px;
  background-color: #fff;
  #logoSelo img {
    width: 100%;
	margin: auto;
	align-self: flex-start;
  }
  #apresentacao {
    width: 50%;
    padding: 10px;
    margin: auto;
  }
  p {
    column-count: 2;
    column-gap: 40px;
    font-family: Roboto, sans-serif;
    text-align: justify;
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
`
const txtApresentacao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 80px;
`

const IndexPage = () => (
  <Layout>
    <Container>
      <Home>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={logoDestaque} alt="logo" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={livroDestaque} alt="livro" />
            <Carousel.Caption>
              <h3>Diabolos</h3>
              <p>Confira o novo livro!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Home>
      <Selo image={logoSolares} texto={txtApresentacao} />
      <Selo image={logoLunares} texto={txtApresentacao} />
    </Container>
  </Layout>
)

export default IndexPage
