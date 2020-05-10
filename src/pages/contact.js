import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./contact.scss"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      message: "",
      subject: "",
      submitted: false
    }
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => {
        this.setState({ submitted: true })
      })
      .catch(error => alert(error))

    e.preventDefault()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { name, email, message, subject, submitted } = this.state
    return (
      <Layout>
        <SEO title="Contact Me" />
        <div className="form__container aligner">
          {!submitted && (
          <form
            method="post"
            data-netlify-recaptcha="true"
            data-netlify="true"
            onSubmit={this.handleSubmit}
          >
            <label>
              <p>Name</p>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={this.handleChange}
              />
            </label>
            <label>
              <p>Email</p>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={this.handleChange}
              />
            </label>
            <label>
              <p>Subject</p>
              <input
                type="text"
                name="subject"
                id="subject"
                value={subject}
                onChange={this.handleChange}
              />
            </label>
            <label>
              <p>Message</p>
              <textarea
                name="message"
                id="message"
                rows="3"
                value={message}
                onChange={this.handleChange}
              />
            </label>
            <div className="form__container__buttons">
              <button type="submit">Send</button>
              <button type="reset" value="Clear">
                Clear
              </button>
            </div>
          </form>
          )}
          {submitted && (
            <div className="success">
            <p>
              Thanks for contacting me!
            </p>
            <p>
              Your enquiry has been submitted and I will reply as soon as i can!
            </p>
            </div>
          )}
        </div>
      </Layout>
    )
  }
}

export default ContactForm
