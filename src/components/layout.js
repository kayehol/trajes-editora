import React from "react"
import { Link } from "gatsby"
import "./layout.css"
import styled from "styled-components"
import "typeface-poppins"
import elemAstros from "../images/elemAstros.png"
import insta from "../images/insta.png"
import fb from "../images/fb.png"
import wpp from "../images/wpp.png"

const Header = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding-right: 20px;
  img {
    width: 110px;
    max-width: 100  %;
    padding: 0 0 5px 20px;
  }
  #menu {
    font-family: Poppins, sans-serif;
    display: flex;
    justify-content: flex-end;
    height: 60px;
    width: 100%;
  }
  #menu a {
    color: #231f20;
    text-decoration: none;
    padding: 10px 20px;
    border-bottom: 4px solid #fff;
    width: auto;
  }
  #menu a:hover {
    border-bottom: 4px solid #dbc724;
  }
`
const Footer =styled.div`
  font-family: Poppins, sans-serif;
  background-color: #758b8b;
  color: #fff;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  #contatos {
    width: 300px;
    text-align: left;
    align-self: center;
    padding-left: 30px;
  }
  #social {
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #social a {
    padding-right: 40px;
  }
`
const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <Link to="/">
          <img src={elemAstros} alt="logo" />
        </Link>
        <div id="menu">
          <Link to="/"><p>SELOS</p></Link>
          <Link to="/loja/"><p>LOJA</p></Link>
          <Link to="/autores/"><p>AUTORES</p></Link>
          <Link to="/blog/"><p>BLOG</p></Link>
          <Link to="/contato/"><p>CONTATO</p></Link>
        </div>
      </Header>
      {children}
      <Footer>
        <div id="contatos">
          <p>ENTRE EM CONTATO</p>
          <p>TEL.: (82) 0000-0000</p>
          <p>E-MAIL: exemplo@gmail.com</p>
        </div>
        <div id="social">
          <a href="#">
            <img src={insta} alt="instagram" />
          </a>
          <a href="#">
            <img src={fb} alt="facebook" />
          </a>
          <a href="#">
            <img src={wpp} alt="whatsapp" />
          </a>
        </div>
      </Footer>
    </>
  )
}

export default Layout
