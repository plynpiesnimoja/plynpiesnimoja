// import { Link } from 'gatsby'
import React from 'react'
import ProjectPreview from './project-preview'

import Button from './button'
import { Heading, Rule } from 'src/components/typography'

import styles from './project-preview-grid.module.scss'

function ProjectPreviewGrid (props) {
  return (
    <section 
      className={styles.root} 
      //tabIndex={0} 
      aria-label={props.title}
    >
      {props.title && (
        <>
          <Heading size={3} caps>{props.title}</Heading>
          <Rule thick='mid' />
        </>
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
          <Button 
            primary 
            link 
            to='/filmy/'
            ariaLabel='Przejdź do strony ze wszystkimi nagraniami.'
          >
            Zobacz wszystkie
          </Button>
        </div>

      )}
    </section>
  )
}

ProjectPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default ProjectPreviewGrid
