import React from "react"
import {Link}  from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.min.css"
import "typeface-poppins"
import "typeface-roboto"
import logoSolares from "../images/logoSolares.png"
import logoLunares from "../images/logoLunares.png"
import logoDestaque from "../images/trajes.png"
//import Image from "../components/image"
import SEO from "../components/seo"

const Home = styled.div`
  z-index: 0;
  width: 100%;
  margin: auto;
  @media screen and (max-width: 720px) {
    margin-top: 4em;
    img {
      height: 350px;
      margin: auto;
      padding: 2em 0;
      width: 100%;
    }
  }
`

const Selo = props => (
  <SeloWrapper>
    <div id="logoSelo">
      <img src={props.image} alt="logo" />
    </div>
    <div id="apresentacao">
      <p>{props.texto}</p>
      <Link to='/loja'>
        <button>IR PARA LOJA</button>
      </Link>
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
  button:hover {
    scale: 1.05;
  }
  transition: scale 1s;
  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
    padding: 30px 20px;
    p {
      column-count: 1;
      font-family: Roboto, sans-serif;
      text-align: left;
    }
    #apresentacao {
      width: 100%;
    }
  }
`
const txtApresentacaoSolares = `Assim como  a simbologia evidencia, este selo editorial, que será lançado em 2021, terá um papel distinto do outro — aqui, um tanto "apolíneo" —, pois através dele publicaremos obras científicas e acadêmicas, com um olhar especialmente voltado para a elucidação daquilo que podemos chamar de “Cultura Alagoana”. Serão teses, dissertações e ensaios, contemporâneos e clássicos, minuciosamente editados para que alcancem públicos diversos e não-especializados.`
const txtApresentacaoLunares = `Abarcando um universo de caráter mais  imaginativo e "dionisíaco", este selo editorial dirá respeito a obras ficcionais e poéticas  — produções  de autores contemporâneos, com textos inéditos ou reeditados, e edições especiais revisadas de clássicos da literatura alagoana.`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 80px;

  article {
    padding: 4em 8em;
    column-count: 2;
    column-gap: 40px;
    text-align: justify;
  }
  @media screen and (max-width: 720px) {
    article {
      padding: 0 2em;
      column-count: 1;
    }
  }
`

const Selos = () => (
  <Layout>
    <SEO title='Selos' />
    <Container>
      <Home>
        <img className="d-block w-100 h-75" src={logoDestaque} alt="logo" />
      </Home>
      <article id="selosApresentacao">
        <p> A Trajes nasceu com a preocupação elementar de construir um ambiente editorial fundamentado em um&nbsp; novo tipo de relação entre editora, autores e leitores. Nasceu a partir da preocupação de construir soluções que tragam um equilíbrio para esse vínculo, tornando-o mais transparente e justo — especialmente, incorporando a esse processo um cuidado editorial atento, efetivo e afetivo. Afinal, cremos que publicamos livros que trazem histórias que seguem para além daquelas impressas exclusivamente em suas páginas.</p>
        <p>Nossas publicações passam por uma curadoria apurada, em que nos esforçamos por trazer à tona tanto livros de autores contemporâneos quanto novas edições de importante obras&nbsp;alagoanas que encontram-se esgotadas há anos, mas que, seja pelo seu caráter estético-criativo ou pelo seu potencial uso no âmbito da pesquisa e elucidação das questões alagoanas, precisam ser recolocadas em circulação no mercado editorial.</p>
        <p>Para alcançar esses objetivos, e buscando trazer uma organização autoevidente para nosso projeto, lançamos dois selos editoriais:</p>
      </article>
      <Selo image={logoLunares} texto={txtApresentacaoLunares} />
      <Selo image={logoSolares} texto={txtApresentacaoSolares} />
    </Container>
  </Layout>
)

export default Selos
