import React from 'react'
import classNames from 'classnames'
import { Link as GatsbyLink } from 'gatsby'

const btnClasses = 'button is-primary'

const Link = ({ to, href, className, isButton, children }) => {
  const classes = classNames(className, '', {
    [btnClasses]: isButton,
  })

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    )
  }

  return (
    <GatsbyLink to={to} className={classes}>
      {children}
    </GatsbyLink>
  )
}

export default Link
