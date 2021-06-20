const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `src/markdown`,
    })
    createNodeField({
      node,
      name: `slug`,
      value: `/autores${slug}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve("./src/templates/blogPost.js")
  const resultMD = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  resultMD.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/autor-info.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })

  const resultWP = await graphql(`
    {
      allWpPost {
        edges {
          node {
            slug
            id
          }
        }
      }
    }
  `)

  if (resultWP.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.")
    return
  }

  const BlogPosts = resultWP.data.allWpPost.edges
  BlogPosts.forEach(post => {
    createPage({
      path: `/post/${post.node.slug}`,
      component: BlogPostTemplate,
      context: {
        id: post.node.id,
      },
    })
  })

  const resultWC = await graphql(`
    query {
      allWcProducts {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
    }
  `)

  if (resultWC.errors) {
    reporter.panicOnBuild('Error while running GraphQL query')
    return
  }

  const produtos = resultWC.data.allWcProducts.edges
  produtos.forEach(produto => {
    createPage({
      path: `/loja/${produto.node.slug}`,
      component: path.resolve("./src/templates/produto.js"),
      context: {
        id: produto.node.wordpress_id,
        slug: produto.node.slug
      }
    })
  })
}
