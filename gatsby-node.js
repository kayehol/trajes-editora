const path = require(`path`)
const {createFilePath} = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const {createNodeField} = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({
            node, getNode, basePath: `src/markdown`
        })
        createNodeField({
            node,
            name: `slug`,
            value: `/autores${slug}`,
        })
    }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    const {createPage} = actions
    const BlogPostTemplate = path.resolve('./src/templates/blogPost.js')
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
    
    resultMD.data.allMarkdownRemark.edges.forEach(({node}) => {
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
      allWordpressPost {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
    }
  `)

  if (resultWP.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }

  const BlogPosts = resultWP.data.allWordpressPost.edges
  BlogPosts.forEach(post => {
    createPage({
      path: `/post/${post.node.slug}`,
      component: BlogPostTemplate,
      context: {
        id: post.node.wordpress_id,
      },
    })
  })
}
