import React from 'react'
import { graphql } from 'gatsby'
import Container from 'src/components/container'
import GraphQLErrorList from 'src/components/graphql-error-list'

import SEO from 'src/components/seo'
import Layout from 'src/containers/layout'
import Page from 'src/containers/page'
import BlockContent from 'src/components/block-content'
import EmptyState from 'src/components/emptystate'
//import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from 'src/lib/helpers'
import { pageNode } from 'src/lib/data';


export const query = graphql`
  query AboutProjectPageQuery {
    aboutProjectPage: sanitySiteSettingsAboutProjectPage(_id: {regex: "/(drafts.|)siteSettingsAboutProjectPage/"}) {
      _rawBody
    }
  }
`

const pageTitle = pageNode.aboutProject

const AboutProjectPage = props => {
  const {data, errors} = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const aboutProjectPage = (data || {}).aboutProjectPage

  const body = aboutProjectPage._rawBody

  return (
    <Layout>
      <SEO title={pageTitle} />
      <Container>
        <Page title={pageTitle}>
          <section tabIndex={0}>
            {body && <BlockContent blocks={body || []} />}

            {!body && (
              <EmptyState 
                title='Ta strona jest jeszcze pusta.'
              >
                Przepraszamy, ale jeszcze nie uzupełniliśmy tutaj treści. Zrobimy to niebawem.
              </EmptyState>
            )}
          </section>
        </Page>
      </Container>
    </Layout>
  )
}

export default AboutProjectPage
