import { format, distanceInWords, differenceInDays } from 'date-fns'
import React, { useRef, useEffect } from 'react';
import { Link } from 'gatsby'
// import { buildImageObj } from '../lib/helpers'
// import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'
import Container from './container'
import RoleList from './role-list'

import Footage from 'src/components/footage'
import { Heading, Typo, Rule } from 'src/components/typography'

import styles from './project.module.scss'


function Project (props) {
  const {_rawBody, title, footage, categories, youtube, members, publishedAt, relatedProjects} = props

  // console.log("props prodżekt", props)
  // console.log("props prodżekt", footage)

  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current.focus();
  });


  const footageSource = footage[0].videoId


  return (
    <div className={styles.root} tabIndex={-1} ariaHidden={true}>
      <article 
        className={styles.footage} 
        tabIndex={-1}
      >
        <section 
          className={styles.footageWrapper} 
          tabIndex={-1}
          ref={containerRef} 
          aria-label={`Film na Youtube`} 
          // aria-hidden={true}
           
        >
            <div 
              className={styles.videoContainer} 
              aria-label={`Obejrzyj odcinek ${props.title}`} 
              tabIndex={0} 
              // aria-hidden={false}
            >

        
              {footage && footageSource && (
                <Footage videoId={footageSource} title={title}/>
              )}
          </div>
        </section>
      </article> 

      
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
                      <time datetime={publishedAt}>
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
            </div>
          </aside>
        </div>
      </Container>
    </div>
  )
}

export default Project
