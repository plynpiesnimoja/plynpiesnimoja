import React from 'react'
import { graphql } from 'gatsby'
import Container from 'src/components/container'
import GraphQLErrorList from 'src/components/graphql-error-list'
import ProjectPreviewGrid from 'src/components/project-preview-grid'
import SEO from 'src/components/seo'
import Layout from 'src/containers/layout'
import Page from 'src/containers/page'
import EmptyState from 'src/components/emptystate'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from 'src/lib/helpers'
import { pageNode } from 'src/lib/data';

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
          thumbImage {
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
