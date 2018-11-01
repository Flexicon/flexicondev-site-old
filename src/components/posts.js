import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Link from '../components/link'

const Posts = ({ children }) => (
  <StaticQuery
    query={graphql`
      query PostsQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              frontmatter {
                title
                path
                date
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark: { edges } }) => (
      <>
        <h3 style={{ marginBottom: '10px' }}>Latest posts</h3>
        <ul>
          {edges.map(({ node: { frontmatter: { title, path, date } } }) => (
            <li key={path}>
              <Link to={path}>
                {title} - {date}
              </Link>
            </li>
          ))}
        </ul>
      </>
    )}
  />
)

export default Posts
