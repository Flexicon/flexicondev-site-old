import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Link from '../components/link'

const Template = ({
  data: { markdownRemark },
  pageContext: { next, prev },
}) => {
  const {
    html,
    frontmatter: { title },
  } = markdownRemark

  return (
    <Layout>
      <h1 className="f4 f3-m f2-l">{title}</h1>
      <div
        className={'blogPostContent'}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {prev && <Link to={prev.frontmatter.path}>Prev post</Link>}
      <br />
      {next && <Link to={next.frontmatter.path}>Next post</Link>}
    </Layout>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Template
