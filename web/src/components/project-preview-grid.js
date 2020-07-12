import { Link } from 'gatsby'
import React from 'react'
import ProjectPreview from './project-preview'

import Button from './button'
import { Heading, Typo } from 'src/components/typography'

import styles from './project-preview-grid.module.scss'

function ProjectPreviewGrid (props) {
  return (
    <div className={styles.root}>
      {props.title && (
        <Heading size="mid" caps>{props.title}</Heading>
      )}
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <ProjectPreview {...node} />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (

          <div className={styles.browseMoreNav}>
            <Button link to='/filmy/'>Zobacz więcej...</Button>
            {/* <Link to={props.browseMoreHref}>Browse more</Link> */}
          </div>

      )}
    </div>
  )
}

ProjectPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default ProjectPreviewGrid
