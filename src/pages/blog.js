import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from 'gatsby-image'

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
        margin-bottom: 1em;
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
    @media screen and (max-width: 720px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 4em 1em;
        #post {
            width: 100%;
        }
        #post img {
            height: 150px;
        }
        ul {
            justify-content: center;
            align-self: center;
            margin: 0;
            padding: 0;
        }
        ul li {
            padding: 2em 0;
            align-self: center;
            margin: 0;
        }
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
                                {post.node.featured_media !== null && 
                                    <Img fluid={post.node.featured_media.localFile.childImageSharp.fluid}/>
                                }
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
          date(formatString: "DD MM, YYYY")
          featured_media {
              localFile {
                  childImageSharp {
                      fluid (maxWidth: 800, maxHeight: 150) {
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
          }
        }
      }
    }
  }
`
