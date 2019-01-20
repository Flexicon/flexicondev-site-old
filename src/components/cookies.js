import React from 'react'

import './cookies.css'

class Cookies extends React.PureComponent {
  state = { cookiesAccepted: null }

  componentDidMount() {
    if (localStorage) {
      const accepted = localStorage.getItem('cookiesAccepted')

      this.setState({ cookiesAccepted: !!accepted })
    }
  }

  acceptCookies = () => {
    this.setState({ cookiesAccepted: true })

    if (localStorage) {
      localStorage.setItem('cookiesAccepted', true)
    }
  }

  render() {
    const { cookiesAccepted } = this.state

    return (
      !cookiesAccepted &&
      cookiesAccepted !== null && (
        <div className="DeliciousDough">
          <div className="container">
            <div className="notification is-primary">
              <button className="delete" onClick={this.acceptCookies} />
              Hi, like many others, this site may or may not use cookies 🍪to
              store information. This is just a heads up, to make sure you're
              cool with that!
            </div>
          </div>
        </div>
      )
    )
  }
}

export default Cookies
