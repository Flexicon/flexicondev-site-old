import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import LinkList from '../components/linkList'

const IndexPage = ({ data: { allSocialsJson, allWorkJson } }) => (
  <Layout>
    <div className="columns">
      <div className="column">
        <div className="box is-h-100-tablet">
          <p className="">Social profiles:</p>
          <LinkList items={allSocialsJson.edges.map(e => e.node)} />
        </div>
      </div>

      <div className="column">
        <div className="box is-h-100-tablet">
          <p className="">Some public things I worked on:</p>
          <LinkList items={allWorkJson.edges.map(e => e.node)} />
        </div>
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
    allWorkJson {
      edges {
        node {
          title
          url
          tags
        }
      }
    }
  }
`

export default IndexPage
