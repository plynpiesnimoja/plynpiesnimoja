import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import { Link } from 'gatsby'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'
import Container from './container'
import RoleList from './role-list'

import Footage from 'src/components/footage'
import { Heading, Typo, Rule } from 'src/components/typography'

import styles from './project.module.scss'


function Project (props) {
  const {_rawBody, title, footage, categories, youtube, members, publishedAt, relatedProjects} = props

  console.log("props prodżekt", props)
  console.log("props prodżekt", footage)


  const footageSource = footage[0].videoId
  return (
    <article className={styles.root}>
      {/* <>
        {props.youtube && youtube.videoId && (
          <Footage videoId={youtube.videoId} />

        )}
      </>  */}
      <>
        {footage && footageSource && (
          <Footage videoId={footageSource} />

        )}
      </> 
      
      <Container>
        <div className={styles.grid}>






          <div className={styles.mainContent}>
            {/* <h1 className={styles.title}>{title}</h1> */}
            <Heading size={1}>{title}</Heading>
            <Rule />
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </div>
          <aside className={styles.metaContent}>
            {publishedAt && (
              
                <div className={styles.publishedAt}>
                  <>
                    {differenceInDays(new Date(publishedAt), new Date()) > 3
                      ? distanceInWords(new Date(publishedAt), new Date())
                      : format(new Date(publishedAt), 'DD / MM / YYYY')}
                    <Rule thick='small' />
                  </>
                </div>

            )}
            {members && members.length > 0 && <RoleList items={members} title='Autorzy' />}
            {categories && categories.length > 0 && (
              <div className={styles.categories}>
                <Heading size={3}>Kategorie</Heading>
                <Rule full />
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
                <Rule full thick='small' />
              </div>
            )}
            {relatedProjects && relatedProjects.length > 0 && (
              <div className={styles.relatedProjects}>
                <Heading size={3}>Zobacz też</Heading>
                {/* <h3 className={styles.relatedProjectsHeadline}>Powiązane</h3> */}
                <Rule full />
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
                <Rule full thick='small' />
              </div>
            )}
          </aside>
        </div>
      </Container>
    </article>
  )
}

export default Project
