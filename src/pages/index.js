import React from 'react'
import { graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from '../components/layout'
import LinkList from '../components/linkList'
import ProjectsList from '../components/projectsList'

const IndexPage = ({ data: { allSocialsJson, allWorkJson } }) => (
  <Layout>
    <div className="section">
      <div className="container">
        <h3 className="title">About</h3>
        <div className="box">
          <p className="has-text-centered" style={{ marginBottom: '1rem' }}>
            Passionate Web Developer with a particular love for all things
            JavaScript. (
            <FontAwesomeIcon icon="heart" style={iconStyles.heart} />
            <FontAwesomeIcon
              icon={{ prefix: 'fab', iconName: 'js' }}
              style={iconStyles.js}
            />
            ) <br />
            Crazy about automation, virtualization and learning about DevOps{' '}
            <FontAwesomeIcon
              icon={{ prefix: 'fab', iconName: 'aws' }}
              style={iconStyles.aws}
            />{' '}
            (Dockerize all the things!{' '}
            <FontAwesomeIcon
              icon={{ prefix: 'fab', iconName: 'docker' }}
              style={iconStyles.docker}
            />
            ). <br />
            Becoming more and more engaged with Golang and Python.
          </p>

          <p className="has-text-centered">
            Moonlighting as a mobile app tinkerer. Particularly on Android{' '}
            <FontAwesomeIcon
              icon={{ prefix: 'fab', iconName: 'android' }}
              style={iconStyles.android}
            />{' '}
            (but still an Apple computer fanboy at heart{' '}
            <FontAwesomeIcon icon={{ prefix: 'fab', iconName: 'apple' }} />)
            <br />
            Hopes to one day truly shred on the guitar! 🤘🎸
          </p>
        </div>
      </div>
    </div>

    <div className="section">
      <div className="container">
        <div className="links-columns">
          <div className="column">
            <div className="is-h-100-tablet has-text-centered">
              <h3 className="title">Social profiles</h3>
              <LinkList
                items={allSocialsJson.edges.map(e => e.node)}
                isCentered
              />
            </div>
          </div>

          <div className="column">
            <div className="is-h-100-tablet">
              <h3 className="title">Some things I worked on</h3>
              <div className="box">
                <div className="is-hidden-tablet">
                  <LinkList
                    items={allWorkJson.edges.map(e => e.node)}
                    isCentered
                  />
                </div>
                <div className="is-hidden-mobile">
                  <ProjectsList items={allWorkJson.edges.map(e => e.node)} />
                </div>
              </div>
            </div>
          </div>
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
          features
        }
      }
    }
  }
`

export default IndexPage

const iconStyles = {
  heart: {
    marginRight: '3px',
    color: '#E25555',
  },
  js: {
    color: '#F0DA50',
  },
  docker: {
    color: '#196DAC',
  },
  android: {
    color: '#A5C836',
  },
  aws: {
    color: '#FF9901',
  },
}
