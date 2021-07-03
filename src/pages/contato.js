import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { useForm } from "react-hook-form"
import axios from "axios"
import imgFone from "../images/tel.svg"
import imgEmail from "../images/email.svg"
import imgInsta from "../images/instagram.svg"
import imgFace from "../images/facebook.svg"
import SEO from "../components/seo"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 120px 60px;
  font-family: Poppins, sans-serif;
  #links {
    width: 50%;
    padding: 50px;
    font-size: 1.3em;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  ul li {
    padding: 10px 0;
  }
  ul li img {
    width: 5%;
    margin-right: 1em;
  }
  a {
    color: #000;
  }
  #faleConosco {
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
    padding: 10px 5px;
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
  }
  button:hover {
    border: 4px solid #dbc724;
  }
  .listaInsta {
    padding-left: 2em;
  }
  @media screen and (max-width: 720px) {
    flex-direction: column;
    padding: 4em 1em;
    #links {
      width: 100%;
      padding: 2em 1em;
    }
    #faleConosco {
      width: 100%;
      padding: 2em 1em;
    }
    button {
      align-self: center;
    }
    ul li {
      display: flex;
      flex-direction: column;
      padding: 1em 0;
    }
    ul li img {
      width: 15%;
    }
    ul li a {
      padding: 0.5em 0;
    }
    .listaInsta {
      padding: 0.5em 0;
    }
  }
`

const Contato = () => {
  const { register, handleSubmit, watch, errors } = useForm()

  const onSubmit = data => {
    axios
      .post("https://getform.io/f/d3cc8014-e4b2-4ab3-bf08-9f1e5a71faf4", data, {
        headers: { Accept: "application/json" },
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <Layout>
      <SEO title='Contato' />
      <Container>
        <div id="links">
          <ul>
            <li>
              <img src={imgFone} alt="fone" />
              <b>TELEFONE:</b>{" "}
              <a href="https://wa.me/5582998054902">(82) 99805-4902</a>{" "}
              <a href="https://wa.me/5582999859165">(82) 99985-9165</a>
            </li>
            <li>
              <img src={imgEmail} alt="emails" />
              <b>E-MAIL: </b>{" "}
              <a href="mailto:trajeseditora@gmail.com">
                {" "}
                trajeseditora@gmail.com
              </a>
            </li>
            <li>
              <img src={imgFace} alt="facebook" />
              <b>FACEBOOK: </b>
              <a href="https://www.facebook.com/trajeslunares/">
                trajeslunares
              </a>
            </li>
            <li>
              <img src={imgInsta} alt="instagram" />
              <b>INSTAGRAM: </b>
            </li>
            <li className="listaInsta">
              <a href="https://www.instagram.com/trajeslunares/">
                TRAJES LUNARES
              </a>
            </li>
            <li className="listaInsta">
              <a href="https://www.instagram.com/trajessolares/">
                TRAJES SOLARES
              </a>
            </li>
          </ul>
        </div>
        <div id="faleConosco">
          <h3>FALE CONOSCO</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="nome"
              defaultValue="Nome"
              ref={register({ required: true })}
            />
            {errors.nome && <span>Nome inválido</span>}
            <input
              name="email"
              defaultValue="E-mail"
              ref={register({
                required: true,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.email && <span>E-mail inválido</span>}
            <textarea
              name="msg"
              rows="8"
              cols="20"
              ref={register({ required: true })}
            ></textarea>
            {errors.msg && <span>Mensagem inválida</span>}
            <button type="submit">ENVIAR</button>
          </form>
        </div>
      </Container>
    </Layout>
  )
}

export default Contato
