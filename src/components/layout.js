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
  padding-right: 20px;
  position: fixed;
  width:100%;
  z-index: 1;
  align-items: flex-end;
  img {
    width: 80%;
    max-width: 100%;
    padding: 10px 20px;
  }
  #menu {
    font-family: Poppins, sans-serif;
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
  #menu a {
    color: #231f20;
    text-decoration: none;
    padding: 0px 20px;
    border-bottom: 4px solid #fff;
    width: auto;
  }
  #menu a:hover {
    border-bottom: 4px solid #dbc724;
  }
  @media screen and (max-width: 720px) {
    display: none;
  }
`
const Footer =styled.div`
  font-family: Poppins, sans-serif;
  background-color: #758b8b;
  color: #fff;
  padding: 60px 40px;
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
          <Link to="/selos"><p>SELOS</p></Link>
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
          <p>TEL.: (82) 99805-4902</p>
          <p>TEL.: (82) 99985-9165</p>
          <p>E-MAIL: trajeseditora@gmail.com</p>
        </div>
        <div id="social">
          <a href="https://instagram.com">
            <img src={insta} alt="instagram" />
          </a>
          <a href="https://facebook.com">
            <img src={fb} alt="facebook" />
          </a>
          <a href="https://whatsapp.com">
            <img src={wpp} alt="whatsapp" />
          </a>
        </div>
      </Footer>
    </>
  )
}

export default Layout
