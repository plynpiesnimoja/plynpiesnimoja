import React from 'react'
import { graphql } from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from 'src/lib/helpers'
import Container from 'src/components/container'
import GraphQLErrorList from 'src/components/graphql-error-list'
import ProjectPreviewGrid from 'src/components/project-preview-grid'
import SEO from 'src/components/seo'
import Layout from 'src/containers/layout'
import BlockContent from 'src/components/block-content'
import Hero from 'src/components/hero'

import { Heading, Typo, Rule } from 'src/components/typography'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
    mainPage: sanitySiteSettingsMainPage(_id: {regex: "/(drafts.|)siteSettingsMainPage/"}) {
      welcomeHeader
      _rawBody
      heroImage {
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
    projects: allSanitySampleProject(
      limit: 3
      sort: {fields: [publishedAt], order: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
    ) {
      edges {
        node {
          id
          mainImage {
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
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const mainPage = (data || {}).mainPage
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }
  console.log("mejnPejdż dejta", mainPage)
  //const 
  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />

      <Hero heroImage={mainPage.heroImage}>
        <section>
          
            <Heading 
              responsive 
              title 
              size={1}
            >{mainPage.welcomeHeader}</Heading>
            <Rule color='accent' />
            <div tabIndex={0}>
              <BlockContent blocks={mainPage._rawBody || []} />
            </div>
        </section>
      </Hero>

      <Container>
        
        {projectNodes && (
          <ProjectPreviewGrid
            title='Ostatnio dodane'
            nodes={projectNodes}
            browseMoreHref='/filmy/'
          />
        )}
        
      </Container>

    </Layout>
  )
}

export default IndexPage
