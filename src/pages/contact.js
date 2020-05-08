import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./contact.scss"

const Contact = () => (
  <Layout>
    <SEO title="Contact Me" />
    <div className="form__container aligner">
      <form method="post">
        <label>
          <p>Name</p>
          <input type="text" name="name" id="name" />
        </label>
        <label>
          <p>Email</p>
          <input type="email" name="email" id="email" />
        </label>
        <label>
          <p>Subject</p>
          <input type="text" name="subject" id="subject" />
        </label>
        <label>
          <p>Message</p>
          <textarea name="message" id="message" rows="3" />
        </label>
        <div className="form__container__buttons">
          <button type="submit">Send</button>
          <button type="reset" value="Clear">
            Clear
          </button>
        </div>
      </form>
    </div>
  </Layout>
)

export default Contact
