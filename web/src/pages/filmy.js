import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Page from '../containers/page'
import EmptyState from 'src/components/emptystate'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from 'src/lib/helpers'
import { pageNode } from 'src/lib/data';

import { responsiveTitle1 } from '../components/typography.module.css'

export const query = graphql`
  query FilmyPageQuery {
    projects: allSanitySampleProject(
      limit: 100
      sort: {fields: [publishedAt], order: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
    ) {
      edges {
        node {
          id
          mainImage {
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

const pageTitle = pageNode.projects 

const FilmyPage = props => {
  const {data, errors} = props
  
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const projectNodes =
    data && data.projects && mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)

  return (
    <Layout>
      <SEO title={pageTitle} />
      <Container>
        <Page title={pageTitle}>

          {projectNodes && projectNodes.length > 0 && <ProjectPreviewGrid nodes={projectNodes} />}


          {!projectNodes && (
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

export default FilmyPage
