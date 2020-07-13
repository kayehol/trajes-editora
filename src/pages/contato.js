import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 120px 60px;
    font-family: Poppins, sans-serif;
    #links{
        width: 50%;
        padding: 50px;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    ul li {
        padding: 10px 0;
    }
    a {
        color: #000;
    }
    #faleConosco{
        width: 50%;
        padding: 10px 20px;
    }
    #faleConosco h2 {
        align-self: center;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
    textarea {
        padding: 10px 0;
        width: 100%;
    }
    input {
        padding: 10px 0;
        margin: 10px 0;
        width: 100%;
    }
    button {
        width: 100px;
        align-self: flex-end;
        padding: 10px;
        margin-top: 40px;
        background-color: #fff;
        border: 2px solid #dbc724;
        font-weight: bold;
    }
`

const Contato = () => (
  <Layout>
    <Container>
      <div id="links">
        <ul>
          <li>
            <a href="https://www.google.com">TELEFONE</a>
          </li>
          <li>
            <a href="https://www.google.com">E-MAIL</a>
          </li>
          <li>
            <a href="https://www.google.com">FACEBOOK</a>
          </li>
          <li>
            <a href="https://www.google.com">INSTAGRAM</a>
          </li>
        </ul>
      </div>
      <div id="faleConosco">
          <h3>FALE CONOSCO</h3>
          <form>
              <input id='inputNome' type='text' placeholder='Nome' aria-label='Nome'></input>
              <input id='inputEmail' type='text' placeholder='E-mail' aria-label='Email'></input>
              <textarea name='msg' rows='8' cols='20' aria-label='msg'></textarea>
              <button>Enviar</button>
          </form>
      </div>
    </Container>
  </Layout>
)

export default Contato
