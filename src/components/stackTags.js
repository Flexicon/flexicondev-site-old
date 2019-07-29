import React from 'react'
import classNames from 'classnames'

import './stackTags.css'

const tagTypes = {
  php: {
    label: 'PHP',
    color: 'dark',
  },
  vue: {
    label: 'Vue.js',
    color: 'vue',
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
  zend: {
    label: 'Zend 3',
    color: 'zend',
  },
  android: {
    label: 'Android',
    color: 'android',
  },
  symfony: {
    label: 'Symfony',
    color: 'symfony',
  },
}

const StackTags = ({ tags, noMargin }) => (
  <span className={classNames('StackTags is-block-mobile', { noMargin })}>
    {tags.map(tag => {
      const foundTag = tagTypes[tag]
      const { label, color } = foundTag || { label: tag, color: 'light' }
      return (
        <span key={tag} className={`tag is-${color}`}>
          {label}
        </span>
      )
    })}
  </span>
)

export default StackTags
