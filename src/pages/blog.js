import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import PostPreview from '../components/post'

const Container = styled.div`
    font-family: Poppins, sans-serif;
    padding: 6em;
    display: flex;
    justify-content: center;
    ul {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        li {
            padding: 0em;
            margin: 0em;
            /* border-bottom: 1px solid #ccc; */
            width: 33%;
        }
    }
    a {
        text-decoration: none;
        color: #231f20;
    }
    a:hover {
        color: #758b8b;
    }
    
    @media screen and (max-width: 720px) {
        display: flex;
        justify-content: center;
        padding: 4em 0;
        margin: 0;
        width: 100%;
        ul {
            flex-direction: column;
            justify-content: center;
            align-self: center;
            margin: 0;
            padding: 0;
        }
        ul li {
            padding: 2em 1em;
            align-self: center;
            margin: 0;
            width: auto;
        }
        
    }
`

const Blog = ({data}) => (
    <Layout>
        <SEO title="Blog" />
        <Container>
            <ul>
                {data.allWpPost.edges.map(post => (
                    <li>
                        <Link to={`/post/${post.node.slug}`}>
                            <PostPreview data={post.node} />
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
    allWpPost {
      edges {
        node {
          title
          excerpt
          slug
          date(formatString: "DD-MM-YYYY")
          featuredImage  {
              node {
                localFile {
                  childImageSharp {
                    fixed (height: 300, width: 350) {
                        ...GatsbyImageSharpFixed
                    }
                  }
              }
          }
        }
      }
    }
  }}
`
