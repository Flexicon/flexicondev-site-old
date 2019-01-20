import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faStackOverflow,
  faJs,
  faDocker,
  faAws,
  faAndroid,
  faApple,
} from '@fortawesome/free-brands-svg-icons'

import Header from './header'
import 'bulma/css/bulma.min.css'
import './layout.css'
import Cookies from './cookies'

library.add([
  faGithub,
  faLinkedin,
  faTwitter,
  faStackOverflow,
  faJs,
  faDocker,
  faHeart,
  faAws,
  faAndroid,
  faApple,
])

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
        {children}

        <footer className="footer">
          <div className="content has-text-centered">
            <p>© 2018 Michal Repec. All rights reserved.</p>
          </div>
        </footer>

        <Cookies />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
