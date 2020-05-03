import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import "./footer.css";

const Footer = ({ footerLinks }) => (
  <footer>
    <div className="footer__container" style={{marginTop: `1.45rem` }}>
      {footerLinks.map((footerLink, i) => (
        <div>
        <Link
          to={footerLink.url}
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
        <div className="footer__link">
          {footerLink.name}
          </div>
        </Link>
          </div>
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
