import React from 'react'
import StackTags from './stackTags'

import './projectsList.css'
import Link from './link'

const ProjectsList = ({ items }) => {
  return (
    <table className="table ProjectsList">
      <thead>
        <tr>
          <th>Project</th>
          <th>Stack</th>
          <th>Features</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ title, url, tags, features }) => (
          <tr key={title}>
            <td>
              <Link href={url}>{title}</Link>
            </td>
            <td>
              <StackTags tags={tags} noMargin />
            </td>
            <td>
              <em>{features}</em>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ProjectsList
