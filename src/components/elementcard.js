import React from "react"
import PropTypes from "prop-types"
import YouTube from "react-youtube"

import "./elementcard.scss"

function ElementCard({ preview, title, description }) {
  return (
    <div className="video__element">
      <YouTube videoId={preview} opts={{ height: 250, width: 450 }} />
      <div className="video__element__info">
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
    </div>
  )
}

ElementCard.defaultProps = {
  preview: `en`,
  title: ``,
  description: ``,
}

ElementCard.propTypes = {
  preview: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default ElementCard
