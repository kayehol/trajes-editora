import React from "react"
import styled from "styled-components"
import "typeface-poppins"
import "typeface-roboto"
import logoLunares from "../images/logoLunares.png"
import logoGIF from "../images/logoGIF.gif"
import capaDiabolo from "../images/capaDiabolo.jpg"

const Container = styled.div`
  background-color: #fff;
  color: #231f20;
  display: flex;
  flex-direction: column;
  align-items: center;

  #logoLunares {
    max-width: 70%;
    padding: 100px 0px;
  }
`

const PreVenda = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-family: Poppins, sans-serif;
    padding: 40px 0;
    font-weight: bold;
  }
  #livro {
    display: flex;
    flex-direction: row;
    max-width: 60%;
    padding: 20px 0;
    font-family: Poppins, sans-serif;
  }
  #livro img {
    width: 50%;
  }
  #livro p {
    width: 50%;
    padding: 0px 40px;
  }
  #checkout {
    margin: auto;
    padding: 20px 10px;
    button {
      padding: 10px 20px;
    }
  }
  #fichaTecnica {
    flex-direction: column;
  }
  #fichaTecnica ul {
    list-style-type: none;
    font-size: 1.2em;
  }
  #fichaTecnica p {
    width: 100%;
    font-weight: bold;
  }
  #apresentacao {
    font-family: Poppins, sans-serif;
    width: 60%;
    padding: 40px 0px;
    font-size: 1.2em;
  }
  #apresentacao a {
    text-decoration: underline;
    color: #231f20;
  }
  #apresentacao ul{
	list-style-type: none;
	text-align: center;
  }
  blockquote{
	background: #f9f9f9;
	border-left: 10px solid #ccc;
	margin: 1.5em 10px;
	padding: 0.5em 10px;
	font-size: 1.4em;
	text-align: justify;
  }
`

const Diabolo = () => (
  <Container>
    <img id="logoGIF" src={logoGIF} alt="logo" />
    <img id="logoLunares" src={logoLunares} alt="trajes lunares" />
    <PreVenda>
      <h2>PRÉ-VENDA "DIABOLO"</h2>
      <div id="livro">
        <img src={capaDiabolo} alt="capa" />
        <div id="fichaTecnica">
          <p>FICHA TÉCNICA</p>
          <ul>
            <li>ENCARDENAÇÃO: BROCHURA</li>
            <li>FORMATO: 14 x 21 cm</li>
            <li>PÁGINAS: 100</li>
            <li>PAPEL: PÓLEN 80 GRAMAS</li>
            <li>ANO DE EDIÇÃO: 2020</li>
            <li>EDIÇÃO: 2ª (REVISTA PELO AUTOR)</li>
            <li>SELO: TRAJES LUNARES</li>
          </ul>
        </div>
      </div>
      <div id="apresentacao">
        <p>
          Com textos produzidos durante o espaço de quinze anos, Diabolô,
          vencedor do Prêmio Lego 2009, na Categoria Contos, foi publicado pela
          primeira vez em 2011, pela Editora da Universidade Federal de
          Alagoas/Edufal. Esgotado há alguns anos, ele é novamente publicado, em
          uma edição revista pelo autor.{" "}
        </p>
        <p>
          Quando do lançamento do livro, o saudoso crítico literário Alfredo
          Monte colocou-o como um dos destaques dentre os lançamentos daquele
          ano:
        </p>
        <p>
          <a href="https://armonte.wordpress.com/2011/12/04/sobre-meninos-e-lobos-a-seducao-dos-contos-de-nilton-resende/">
            SOBRE MENINOS E LOBOS: a sedução dos contos de Nilton Resende
          </a>
        </p>
        <p>
          <a href="https://armonte.wordpress.com/2012/01/05/destaques-de-2011-segunda-e-ultima-parte/">
            DESTAQUES DE 2011
          </a>
        </p>
        <p>
          Dois contos do livro foram traduzidos para línguas estrangeiras e
          publicados em periódicos:
        </p>
        <p>
          {" "}
          “A ceia” — em espanhol no primeiro número da Machado de Assis
          Magazine, editada pela Biblioteca Nacional para divulgar a literatura
          brasileira na Feira de Frankfurt (“La cena”, trad. de Pablo Cardellino
          Soto, 2012); em francês na revista D-Fiction (
          <a href="http://d-fiction.fr/2018/01/le-repas/">“Le repas”</a>, trad.
          de Stéphane Chao, 2018); em inglês na revista Bookanista (
          <a href="http://bookanista.com/supper/">“The supper”</a>, trad. de Kim
          M. Hastings, 2019);
        </p>
        <p>
          “A fresta” — em inglês na
          <a href="https://www.litro.co.uk/"> Litro Magazine</a>, revista
          literária distribuída no metrô londrino (“The crack”, trad. de Alison
          Entrekin, 2012).
        </p>
        <p>
          Na publicação de “A ceia” na Bookanista, foi feita uma entrevista com
          o autor. Ela pode ser lida em
          <a href="http://bookanista.com/nilton-resende/"> inglês</a> ou em{" "}
          <a href="https://trajeslunares.com/2019/02/01/a-damn-boy/">
            português.
          </a>
        </p>
		<h2>O LIVRO</h2>
		<p>Nove contos compõem este livro, em que sempre se manifesta alguma perda irremediável, principalmente a da inocência. Neles, há meninos às voltas com perversidades e jogos de poder;  uma senhora humilhada planeja vingança; uma jovem é esmagada pela beleza. Há também alguns homens engolidos por seus desejos.</p>
		<ul>
			<li>Flamor</li>
			<li>A Ceia</li>
			<li>A canção e a sombra</li>
			<li>Casaram-se numa quinta-feira</li>
			<li>Manual do como manusear</li>
			<li>Não é tempo de maçãs</li>
			<li>Ofício</li>
			<li>Balada da noite insone</li>
			<li>A fresta</li>
		</ul>
		<h2>TRECHO</h2>
		<blockquote>
			<p>
			&#10077; E percebes o engano de achares que era o outro estendido sob o corpo da água — que o mar, que tu fizeste, sobre ele mesmo é vaga. E se afoga nele, sempre, todo o que incauto nada: vela, proa, leme, lume, todo propício aparato; braço e perna e nado é nada. &#10078;
			</p>
			<footer>Manual do como manusear</footer>
		</blockquote>
		<h2>O AUTOR</h2>
		<p>
			Nilton Resende é alagoano de Maceió. É Professor Adjunto de Literatura da Universidade Estadual de Alagoas/Campus Zumbi dos Palmares, na qual coordena os Grupos de Pesquisa Ensino de Literatura (com ênfase no Ensino Médio) e Estudos da Narrativa (com ênfase em Narrativas de Ficção). Integra a Cia. Ganymedes de teatro, para a qual adaptou a novela Mário e o Mágico, de Thomas Mann, para o espetáculo O Mágico, que codirigiu e protagonizou.  Publicou os livros O Orvalho e os Dias (poesia) e A construção de Lygia Fagundes Telles: edição crítica de Antes do Baile Verde. No cinema, tem trabalhado como ator, roteirista, preparador e diretor de elenco. O curta metragem “A Barca” (2019), baseado no conto “Natal na barca”, de Lygia Fagundes Telles, é seu primeiro filme como roteirista e diretor.
		</p>
	  </div>
      <div id="checkout">
        <button>CHECKOUT</button>
      </div>
    </PreVenda>
  </Container>
)

export default Diabolo
