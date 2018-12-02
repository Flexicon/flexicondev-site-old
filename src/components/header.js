import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div className="bg-dark-gray">
    <div className="center w-90 w-60-l pv3 pv4-l">
      <h1 className="f3 f2-m f1-l ma0 mb1">
        <Link to="/" className="light-green no-underline">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
