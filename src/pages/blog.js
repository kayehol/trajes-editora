import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Container = styled.div`
    font-family: Poppins, sans-serif;
    padding: 80px 100px;
    ul {
        list-style-type: none;
    }
    ul li {
        padding: 20px 0;
        border-bottom: 1px solid #ccc;
    }
    Link {
        display: flex;
        text-decoration: none;
    }
    #post {
        width: 75%;
    }
    h3 {
        margin-bottom: 0;
    }
    p{
        margin: 0;
    }
    #autorData {
        color: #758b8b;
    }
    a{
        color: #231f20;
    }
    #excerpt {
        padding: 10px 0;
    }
`

const Blog = ({data}) => (
    <Layout>
        <SEO title="Home" />
        <Container>
            <ul>
                {data.allWordpressPost.edges.map(post => (
                    <li>
                        <Link to={`/post/${post.node.slug}`}>
                            <div id="post">
                                <h3 dangerouslySetInnerHTML={{__html: post.node.title}}/>
                                <p id="autorData">Escrito por {post.node.author.name} em {post.node.date}</p>
                                <div id="excerpt" dangerouslySetInnerHTML={{__html: post.node.excerpt}} />
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </Container>
    </Layout>
)

export default Blog

export const query = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
          author {
            name
          }
          date(formatString: "DD MM, YYYY")
        }
      }
    }
  }
`
