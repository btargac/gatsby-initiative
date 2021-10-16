import * as React from 'react'
import {graphql} from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'

import Layout from '../components/Layout'

// markup
const IndexPage = ({data}) => {
    return (
        <Layout pageTitle="Home Page">
            <p>Welcome to my blog!</p>
            <GatsbyImage alt={data.sanityAuthor.slug.current} image={data.sanityAuthor.image.asset.gatsbyImageData} />
        </Layout>

    )
}

export const query = graphql`
    query AuthorQuery {
        sanityAuthor {
            slug {
                current
            }
            image {
                asset {
                    gatsbyImageData
                }
            }
        }
    }
`

export default IndexPage
