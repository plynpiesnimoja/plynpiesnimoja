import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Project from '../components/project'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query MovieMovieTemplateQuery($id: String!) {
    sampleProject: sanitySampleProject(id: {eq: $id}) {
      id
      publishedAt
      footage {
        _key
        _type
        videoId
      }
      thumbImage {
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
      categories {
        _id
        title
      }
      relatedProjects {
        title
        _id
        slug {
          current
        }
      }
      title
      slug {
        current
      }
      _rawBody
      members {
        _key
        person {
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
          }
          name
        }
        roles
      }
    }
  }
`

const MovieProjectTemplate = props => {
  const {data, errors} = props
  const project = data && data.sampleProject
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error - błąd bazy GraphQL' />}
      {project && <SEO title={project.title || 'Bez tytułu'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {project && <Project {...project} />}
    </Layout>
  )
}

export default MovieProjectTemplate
