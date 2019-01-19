import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons'

import Header from './header'
import 'bulma/css/bulma.min.css'
import './layout.css'
import Cookies from './cookies'

library.add([faGithub, faLinkedin, faTwitter, faStackOverflow])

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
            description
            keywords
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
        >
          <html lang="en" />
        </Helmet>

        <Header
          title={data.site.siteMetadata.title}
          subtitle={data.site.siteMetadata.subtitle}
        />
        <div className="section">
          <div className="container">{children}</div>
        </div>

        <Cookies />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
