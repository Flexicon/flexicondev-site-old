import React from 'react'
import { graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from '../components/layout'
import Posts from '../components/posts'
import Link from '../components/link'

const IndexPage = ({ data: { allSocialsJson } }) => (
  <Layout>
    <h1 className="f4 w-90 w-80-m f3-ns">
      <span role="img" aria-label="wave">
        👋
      </span>{' '}
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

        <p>
          Sometimes I like to discuss and ramble about tech stuff. So I decided
          to start writing things down and make my ramblings publicly available.
        </p>

        <p>
          (
          <span role="img" aria-label="work in progress">
            🚧
          </span>
          Work in progress{' '}
          <span role="img" aria-label="work in progress">
            🚧
          </span>
          ) You can find links to the fruits of my labour below
          <span role="img" aria-label="pointing right">
            👇
          </span>
        </p>
      </div>

      <div className="pv3">
        <Posts />
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
