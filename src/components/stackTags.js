import React from 'react'

import './stackTags.css'

const tagTypes = {
  php: {
    label: 'PHP',
    color: 'dark',
  },
  vue: {
    label: 'Vue.js',
    color: 'success',
  },
  angular: {
    label: 'Angular',
    color: 'danger',
  },
  react: {
    label: 'React',
    color: 'link',
  },
  redux: {
    label: 'Redux',
    color: 'light',
  },
  node: {
    label: 'Node.js',
    color: 'warning',
  },
}

const StackTags = ({ tags }) => (
  <span className="StackTags is-block-mobile">
    {tags.map(tag => {
      const { label, color } = tagTypes[tag]
      return (
        <span key={tag} className={`tag is-${color}`}>
          {label}
        </span>
      )
    })}
  </span>
)

export default StackTags
