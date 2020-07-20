import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from 'src/components/container'
import EmptyState from 'src/components/emptystate'

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <Container>

      <EmptyState 
          title='Nie znaleziono strony'
      >
        Strona nie istnieje. Upewnij się czy wpisałeś poprawny adres strony.
      </EmptyState>

    </Container>
  </Layout>
)

export default NotFoundPage
