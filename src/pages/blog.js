import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/Layout'

const BlogPage = ({data}) => {
	return (
		<Layout pageTitle="My Blog Posts">
			<ul>
	        	{ data.allMdx.nodes.map(node => {
	          		return (
	            		<li key={node.frontmatter.title}>
			              <article>
			                <h2>{node.frontmatter.title}</h2>
			                <p>Posted: {node.frontmatter.date}</p>
			                <MDXRenderer>{node.body}</MDXRenderer>
			              </article>
			              <hr />
			            </li>
	          		)
	        	})}
	      	</ul>
		</Layout>
		)
}

export default BlogPage

export const query = graphql`
  query BlogPosts {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
        body
      }
    }
  }
`