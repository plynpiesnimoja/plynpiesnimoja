import { format, distanceInWords, differenceInDays } from 'date-fns'

import React from 'react'
import { Link } from 'gatsby'
import BlockContent from './block-content'
import Container from './container'
import RoleList from './role-list'

import Footage from 'src/components/footage'
import { Heading, Rule } from 'src/components/typography'

import styles from './project.module.scss'


const Project = props => {
  const { 
    _rawBody, 
    title, 
    footage,
    thumbImage, 
    categories, 
    members, 
    publishedAt, 
    relatedProjects 
  } = props

  // Prevents from displaying more than 1 video,
  // Sanity Studio will not allow to add more than 1 video but output data is an array
  // so request for only first argument is needed 
  const footageSource = footage[0].videoId

  return (
    <div className={styles.root}>
      <div className={styles.footage}>
        <section className={styles.footageWrapper}> 
            <div
              className={styles.videoContainer} 
              role='presentation'
              aria-label={`Sekcja z wideo, nagranie pod tytułem: ${title}`} 
            >
              {footage && footageSource && (
                

                <Footage 
                  videoId={footageSource} 
                  title={title}
                  thumbImage={thumbImage}
                />

              )}

          </div>
        </section>
      </div> 

      
      <Container>
        <div className={styles.grid}>

          <article className={styles.mainContent} >
            <Heading tabIndex={0} size={1}>{title}</Heading>
            <Rule />
            <section tabIndex={0}>
              {_rawBody && <BlockContent blocks={_rawBody || []} />}
            </section>
          </article>
          <aside className={styles.metaContent} tabIndex={0}>
            <div>
              {publishedAt && (
                
                  <div 
                    className={styles.publishedAt}
                    aria-label={`Data publikacji ${format(new Date(publishedAt), 'DD-MM-YYYY')}`}
                  >
                    <>
                      <time dateTime={publishedAt}>
                      {differenceInDays(new Date(publishedAt), new Date()) > 3
                        ? distanceInWords(new Date(publishedAt), new Date())
                        : format(new Date(publishedAt), 'DD / MM / YYYY')}
                      </time>
                      <Rule thick='small' />
                    </>
                  </div>

              )}
            </div>
            <div>
            {members && members.length > 0 && <RoleList items={members} title='Autorzy' />}
            {categories && categories.length > 0 && (
              <div className={styles.categories}>
                <Heading size={3} caps>Kategorie</Heading>
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
                <Heading size={3} caps>Zobacz też</Heading>
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
            </div>
          </aside>
        </div>
      </Container>
    </div>
  )
}

export default Project
