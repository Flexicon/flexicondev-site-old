import React from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Link from './link'
import StackTags from './stackTags'
import './linkList.css'

const LinkList = ({ items, isCentered, useAnchors }) => {
  return (
    <ul
      className={classNames(['LinkList', { 'LinkList--centered': isCentered }])}
    >
      {items.map(({ title, url, icon, tags }) => (
        <li key={url} className="is-flex-tablet">
          <Link href={url} isButton={!useAnchors}>
            {icon && (
              <FontAwesomeIcon
                icon={{ prefix: 'fab', iconName: icon }}
                style={{ width: '18px' }}
              />
            )}
            {title}
          </Link>
          {tags && <StackTags tags={tags} />}
        </li>
      ))}
    </ul>
  )
}

export default LinkList
