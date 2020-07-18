import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'

import SEO from '../components/seo'
import Layout from '../containers/layout'
import Page from '../containers/page'
import { Persona } from 'src/components/persona'

// import { Heading, Typo } from 'src/components/typography'

import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from 'src/lib/helpers'
import { pageNode } from 'src/lib/data';



// TO-DO: replace _rawImage with image { ... crop {}, asset {} }

export const query = graphql`
  query AboutBandPageQuery {
    aboutBandPage: sanitySiteSettingsAboutBandPage(_id: {regex: "/(drafts.|)siteSettingsAboutBandPage/"}) {
      bandMembers {
        _key
        person {
          id
          name
          role
          _rawBio(resolveReferences: {maxDepth: 10})
          _rawAttachment
          attachment {
            asset {
              source {
                name
                url
              }
              url
            }
            _key
            _type
          }
          links {
            _key
            _type
            facebook
            instagram
            linkedin
            twitter
            youtube
          }
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
        }
      }
    }
    persons: allSanityPerson(
        sort: {fields: _id, 
        order: DESC}
    ) {
      edges {
        node {
          id
          name
          role
          _rawBio(resolveReferences: {maxDepth: 10})
          _rawImage(resolveReferences: {maxDepth: 10})
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

  const aboutBandPage = (data || {}).aboutBandPage

  console.log("pejdż dejta", aboutBandPage)

  console.log("band members", aboutBandPage.bandMembers)

  const personNodes =
    data && data.persons && mapEdgesToNodes(data.persons).filter(filterOutDocsWithoutSlugs)


  return (
    <Layout>
      <SEO title={pageTitle} />
      <Container>
        <Page title={pageTitle}>

          {aboutBandPage.bandMembers.map((item, i) => (
                <Persona
                  key={i}
                  id={item.person.id}
                  name={item.person.name}
                  role={item.person.role}
                  image={item.person.image}
                  bio={item.person._rawBio}
                  links={item.person.links ? item.person.links : ''}
                  attachment={item.person.attachment}
                />
              ))}

        </Page>
      </Container>
    </Layout>
  )
}

export default AboutBandPage