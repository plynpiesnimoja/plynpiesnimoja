import React from 'react'
import { graphql } from 'gatsby'
import Container from 'src/components/container'
import GraphQLErrorList from 'src/components/graphql-error-list'

import SEO from 'src/components/seo'
import Layout from 'src/containers/layout'
import Page from 'src/containers/page'
import { Persona } from 'src/components/persona'

import EmptyState from 'src/components/emptystate'
// import { Heading, Typo } from 'src/components/typography'

// import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from 'src/lib/helpers'
import { pageNode } from 'src/lib/data';



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
          websiteLink
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


  // const personNodes =
  //   data && data.persons && mapEdgesToNodes(data.persons).filter(filterOutDocsWithoutSlugs)


  return (
    <Layout>
      <SEO title={pageTitle} />
      <Container>
        <Page title={pageTitle}>
          {aboutBandPage.bandMembers && aboutBandPage.bandMembers.length > 0 && (
            <section aria-label='Członkowie zespołu'>
              <ul>
                {aboutBandPage.bandMembers.map((item, i) => (
                    <li key={i}>
                      <Persona
                        id={item.person.id}
                        name={item.person.name}
                        role={item.person.role}
                        image={item.person.image}
                        bio={item.person._rawBio}
                        links={item.person.links ? item.person.links : ''} // && operator?
                        attachment={item.person.attachment}
                      />
                  </li>
                  ))}
              </ul>
            </section>
          )}

          
          {!aboutBandPage.bandMembers.length > 0 && (
            <EmptyState 
              title='Ta strona jest jeszcze pusta.'
            >
              Przepraszamy, ale jeszcze nie uzupełniliśmy tutaj treści. Zrobimy to niebawem.
            </EmptyState>
          )}
        </Page>
      </Container>
    </Layout>
  )
}

export default AboutBandPage