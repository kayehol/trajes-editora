import React from 'react';
import styled from "styled-components"
//import Img from 'gatsby-image'
import { GatsbyImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
    width: 100%;
    padding: 1em 1em 4em 1em;
    margin: 0;
    h3 {
        width: 350px;
        text-overflow: ellipsis;
        overflow:hidden;
        word-wrap: break-word;
        /* word-break: break-all; */
        /* text-wrap: wrap; */
        white-space: wrap;
        font-size: 1.5em;
        height: 60px;
    }   
    a{
        color: #231f20;
    }
    p {
        font-size: 0.9em;
        border-bottom: 2px solid #231f20;
    }
    p:hover {
        color: #231f20;
    }
    /* #excerpt {
        padding: 1em 0;
    } */
    img {
        padding: 1em;
        border-radius: 40px;
    }
    @media screen and (max-width: 720px) {
        width: auto;
        padding: 0;
        margin: 0;
        h3 {
            width: 100%;
        }
        /* img {
            height: 150px;
        } */
    }
`

const Post = ({data}) => {
    return (
        <Wrapper>
            { console.log(data) }
            <h3>{data.title}</h3>
            {data.featuredImage.node.localFile.childImageSharp !== null && 
                //<Img fixed={data.featuredImage.node.localFile.childImageSharp.fixed} />
                <GatsbyImage image={data.featuredImage.node.localFile.childImageSharp.gatsbyImageData} />
            }
            <p>{data.date}</p>
            {/* <div id="excerpt" dangerouslySetInnerHTML={{__html: data.excerpt}} /> */}
        </Wrapper>
    )
}

export default Post;
