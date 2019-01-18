import React from 'react'
import { graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from '../components/layout'
import Link from '../components/link'

const IndexPage = ({ data: { allSocialsJson } }) => (
  <Layout>
    <h1 className="f4 w-90 w-80-m f3-ns">
      Hi I'm Mike, and I make things on the web
    </h1>
    <div className="w-80-ns">
      <div className="pv3">
        <p className="mb2">You can find me online:</p>
        <ul className="list ml0 w-50-ns">
          {allSocialsJson.edges.map(({ node: { title, url, icon } }) => (
            <li key={url}>
              <Link href={url} isButton>
                <FontAwesomeIcon
                  icon={{ prefix: 'fab', iconName: icon }}
                  style={{ width: '18px' }}
                />{' '}
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query HomePageQuery {
    allSocialsJson {
      edges {
        node {
          title
          url
          icon
        }
      }
    }
  }
`

export default IndexPage
