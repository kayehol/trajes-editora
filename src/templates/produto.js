import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

const Container = styled.div`
    padding: 100px 0;
`

const Produto = () => (
    <Layout>
        <Container>
            <h2>Produtos</h2>
        </Container>
    </Layout>
)

export default Produto