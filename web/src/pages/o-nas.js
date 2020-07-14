import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'

import SEO from '../components/seo'
import Layout from '../containers/layout'
import { Persona } from 'src/components/persona'
import BlockContent from 'src/components/block-content'

import { Heading, Typo } from 'src/components/typography'

import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from 'src/lib/helpers'
import { pageNode } from 'src/lib/data';

import { responsiveTitle1 } from '../components/typography.module.css'

export const query = graphql`
  query AboutBandPageQuery {
    persons: allSanityPerson(
        sort: {fields: _id, 
        order: DESC}
    ) {
      edges {
        node {
          id
          name
          _rawBio(resolveReferences: {maxDepth: 10})
          _rawImage(resolveReferences: {maxDepth: 10})
          slug {
            current
          }
        }
      }
    }
  }
`

const pageTitle = pageNode.aboutBand

const AboutBandPage = props => {
  const { data, errors } = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const personNodes =
    data && data.persons && mapEdgesToNodes(data.persons).filter(filterOutDocsWithoutSlugs)
  console.log("persony", personNodes)

  return (
    <Layout>
      <SEO title={pageTitle} />
      <Container>
        <div>
          <h1 className={responsiveTitle1}>{pageTitle}</h1>
        </div>

        {personNodes && personNodes.length > 0 && (
          <>
            {personNodes.map(person => (
              <Persona 
                key={person.id}
                id={person.id}
                name={person.name}
                image={person._rawImage.asset}
                bio={person._rawBio}
              />
            ))}
          </>
        )}
      </Container>
    </Layout>
  )
}

export default AboutBandPage





// const Persona = (props) => {
//   const { id, name, image, bio } = props
//   const classes = {
//     root: 'Persona',
//     header: 'Persona-header',
//     container: 'Persona-container'
//   }

//   console.log(...bio)

//   return(
//     <div className={classes.root} style={{ border: `1px solid white`, padding: 10 }} title={id}>
//       <div className={classes.header}>
//         <Heading size="mid">{name}</Heading>
//         <img src={image.url} width={200}/>
//       </div>
//       <div>
//         <BlockContent blocks={bio || []} />
//       </div>
      

//     </div>
//   )
// }