import React from 'react'
import classNames from 'classnames'
import { Link as GatsbyLink } from 'gatsby'

const btnClasses = 'ba b--light-silver br2 bg-white pv1 ph2 db'

const Link = ({ to, href, className, isButton, children }) => {
  const classes = classNames(className, 'link blue dim', {
    [btnClasses]: isButton,
  })

  if (href) {
    return (
      <a href={href} className={classes}>
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
