import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'

import SEO from '../components/seo'
import Layout from '../containers/layout'
import Page from '../containers/page'
import BlockContent from '../components/block-content'
//import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from 'src/lib/helpers'
import { pageNode } from 'src/lib/data';

import { responsiveTitle1 } from '../components/typography.module.css'

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

  // console.log(aboutProjectPage)
  // console.log("ol dejta", data)

  return (
    <Layout>
      <SEO title={pageTitle} />
      <Container>
        <Page title={pageTitle}>
          <section tabIndex={0}>
            {body && <BlockContent blocks={body || []} />}

            {!body && <p>Brak treściwa i empty state</p>}
          </section>
        </Page>
      </Container>
    </Layout>
  )
}

export default AboutProjectPage
