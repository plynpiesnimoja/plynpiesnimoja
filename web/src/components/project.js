import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import { Link } from 'gatsby'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'
import Container from './container'
import RoleList from './role-list'

import Footage from 'src/components/footage'

import styles from './project.module.css'


function Project (props) {
  const {_rawBody, title, categories, youtube, members, publishedAt, relatedProjects} = props

  console.log("props prodżekt", props)

  return (
    <article className={styles.root}>
      <>
        {props.youtube && youtube.videoId && (
          <Footage videoId={youtube.videoId} />

        )}
      </> 
      
      <Container>
        <div className={styles.grid}>






          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </div>
          <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'DD / MM / YYYY')}
              </div>
            )}
            {members && members.length > 0 && <RoleList items={members} title='Autorzy' />}
            {categories && categories.length > 0 && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Kategorie</h3>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
            {relatedProjects && relatedProjects.length > 0 && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>Powiązane</h3>
                <ul>
                  {relatedProjects.map(project => (
                    <li key={`related_${project._id}`}>
                      {project.slug ? (
                        <Link to={`/film/${project.slug.current}`}>{project.title}</Link>
                      ) : (
                        <span>{project.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </article>
  )
}

export default Project

// const styleCss = {
//   youtube: {
//     position: `absolute`,
//     width: `100%`,
//     height: `100%`
//   },
//   container: {
//     width: `100%`,
//     height: `100%`
//   }
// }
// const Footage = (props) => (
//   <div style={styleCss.youtube}>
//     <iframe style={styleCss.container}
//       // width="560" 
//       // height="315" 
//       src={`https://www.youtube.com/embed/${props.videoId}`}
//       // src={props.url}
//       frameborder="0" 
//       allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
//       allowfullscreen
//     >

//     </iframe>
//   </div>
// )