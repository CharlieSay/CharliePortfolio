import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const Footer = ({ footerLinks }) => (
  <footer>
    <div>
      {footerLinks.map((footerLink, i) => (
        <Link
          to={footerLink.url}
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {footerLink.name}
        </Link>
      ))}
    </div>
  </footer>
)

Footer.propTypes = {
  footerLinks: [
    {
      name: PropTypes.string,
      url: PropTypes.string,
    },
  ],
}

Footer.defaultProps = {
  footerLinks: [
    {
      name: "",
      url: "/",
    },
  ],
}

export default Footer
