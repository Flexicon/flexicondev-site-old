import React from 'react'
import { Link } from 'gatsby'

const Header = ({ title, subtitle }) => (
  <section className="hero is-medium is-dark is-bold">
    <div className="hero-body">
      <div className="container">
        <Link to="/">
          <h1 className="title has-text-primary">{title}</h1>
        </Link>
        <h2 className="subtitle">{subtitle}</h2>
      </div>
    </div>
  </section>
)

export default Header
