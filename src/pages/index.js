import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
	  <StaticImage
        alt="Burak Targac"
        src="https://media-exp1.licdn.com/dms/image/C4D03AQEo454zgxyeDA/profile-displayphoto-shrink_800_800/0/1610716455484?e=1639612800&v=beta&t=O4poNJzdhQ6M4ldomwoz8evJMVO2XdjKUZiiHirx3jI"
      />
      <p>Welcome to my blog!</p>
    </Layout>

  )
}

export default IndexPage
