import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

import pages from "../data/pages.json"

import "./index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="index" style={{ paddingTop: `100px` }}>
      <div className="index__about">
        <div className="index__about__image">
          <Image src={"profile.png"} style={{ borderRadius: `150px` }} />
        </div>
        <div className="index__about__text">
          <div className="index__about__text__hey">
            <h1>HEY, IM CHARLIE</h1>
          </div>
          <div className="index__about__text__info">
            <p>
              Im a versatile creative, with experience in several creatives
              industries.
            </p>
            <p>Video</p>
            <p>Graphic Design</p>
            <p>Software Engineering</p>
            <p>Music</p>
          </div>
        </div>
      </div>
      <div className="index__about__navigation">
        {pages.map(data => (
          <Link to={data.pageLocation} style={{textDecoration: `none`}}>
            <div className="index__about__navigation__thumbnail">
              <p>{data.title.toUpperCase()}</p>
              <div className="index__about__navigation__thumbnail__imagewrapper">
                <Image src={data.thumbnail} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </Layout>
)

export default IndexPage
