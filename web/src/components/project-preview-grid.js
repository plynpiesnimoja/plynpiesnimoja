// import { Link } from 'gatsby'
import React from 'react'
import ProjectPreview from './project-preview'

import Button from './button'
import { Heading } from 'src/components/typography'

import styles from './project-preview-grid.module.scss'

function ProjectPreviewGrid (props) {
  console.log("Grid prev nołds", props.nodes)
  console.log("Jutube URL grid", props.nodes.youtube)
  return (
    <div className={styles.root}>
      {props.title && (
        <Heading size="mid" caps>{props.title}</Heading>
      )}
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              {console.log("Jutube URL grid", node.youtube)}
              <ProjectPreview {...node} />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (

          <div className={styles.browseMoreNav}>
            <Button link to='/filmy/'>Zobacz więcej...</Button>
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
