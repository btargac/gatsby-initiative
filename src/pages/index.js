import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
	  <StaticImage
        alt="A reddish-brown pitbull looking longingly at the camera from behind a mason jar of overnight oats"
        src="https://pbs.twimg.com/media/EsW978QUcAAj1Pe?format=jpg&name=4096x4096"
      />
      <p>Welcome to my blog!</p>
    </Layout>

  )
}

export default IndexPage
