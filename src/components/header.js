import React from 'react'
import { Link } from 'gatsby'

const Header = ({ title, subtitle }) => (
  <section className="hero is-medium is-dark is-bold">
    <div className="hero-body">
      <div className="container">
        <Link to="/">
          <h1 className="title is-size-2-touch is-size-1-desktop has-text-primary">{title}</h1>
        </Link>
        <h2 className="subtitle is-size-4-desktop">{subtitle}</h2>
      </div>
    </div>
  </section>
)

export default Header
