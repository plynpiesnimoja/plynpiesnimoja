import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from 'src/components/container'
import { Heading, Typo, Rule } from 'src/components/typography'

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <Container>
      <Heading>Nie znaleziono strony</Heading>
      <Typo>Strona nie istnieje. Upewnij się czy wpisałeś poprawny adres strony.</Typo>
    </Container>
  </Layout>
)

export default NotFoundPage
