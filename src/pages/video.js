import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ElementCard from "../components/elementcard"

import content from "../data/videopage.json"

const Video = () => (
  <Layout>
    <SEO title="Home" />
    {content.map(data => (
      <>
        <p style={{display: "flex", justifyContent: "center"}}>{data.title.toUpperCase()}</p>

        {data.elements.map(data => (
          <>
            <ElementCard
              preview={data.preview}
              title={data.elementTitle}
              description={data.elementDescription}
            />
          </>
        ))}
      </>
    ))}
  </Layout>
)

export default Video
