import React, { useState, useContext } from "react"
//import { elastic as Menu } from "react-burger-menu"
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
  @media screen and (max-width: 720px) {
    flex-direction: column;
    #social {
      padding-top: 2em;
  
    }
  }
`
/*
const MyContext = React.createContext()

const MyProvider = props => {
  const [menuOpenState, setMenuOpenState] = useState(false)

  return (
    <MyContext.Provider
      value={{
        isMenuOpen: menuOpenState,
        toggleMenu: () => setMenuOpenState(!menuOpenState),
        stateChangeHandler: newState => setMenuOpenState(newState.isOpen),
      }}
    >
      {props.children}
    </MyContext.Provider>
  )
}

const Navigation = () => {
  const ctx = useContext(MyContext)
  return (
    <Menu
      isOpen={ctx.isMenuOpen}
      onStateChange={state => ctx.stateChangeHandler(state)}
    >
      <a href="#escritorio" className="menu-item">
        SELOS
      </a>
      <a href="#socios" className="menu-item">
        LOJA
      </a>
      <a href="#contato" className="menu-item">
        AUTORES
      </a>
      <a href="#contato" className="menu-item">
        BLOG
      </a>
      <a href="#contato" className="menu-item">
        CONTATO
      </a>
    </Menu>
  )
}
*/
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
          <a href="https://instagram.com/trajeslunares">
            <img src={insta} alt="instagram" />
          </a>
          <a href="https://instagram.com/trajessolares">
            <img src={insta} alt="instagram" />
          </a>
          <a href="https://www.facebook.com/trajeslunares/">
            <img src={fb} alt="facebook" />
          </a>
          <a href="https://wa.me/5582998054902">
            <img src={wpp} alt="whatsapp" />
          </a>
        </div>
      </Footer>
    </>
  )
}

export default Layout
