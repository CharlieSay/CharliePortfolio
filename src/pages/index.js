import React from "react"

import "./index.css"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="index">
      <div className="index__about">
        <div className="index__about__image">
          <Image className="profile" />
        </div>
        <div className="index__about__text">
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
