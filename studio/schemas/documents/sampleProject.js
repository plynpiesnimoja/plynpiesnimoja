import { format } from 'date-fns'
import Icon from 'react-icons/lib/md/movie'


export default {
  name: 'sampleProject',
  title: 'Sample project',
  type: 'document',
  icon: Icon,
  fields: [
    {
      name: 'title',
      title: 'Tytuł',
      type: 'string'
    },
    {
      name: 'subtitle',
      title: 'Podtytuł',
      type: 'string'
    },
    {
      name: 'youtube',
      title: 'Film',
      type: 'youtube',
      // options: {
      //   source: 'title',
      // }
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the project',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      description: 'You can use this field to schedule projects where you show them',
      type: 'datetime'
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'simplePortableText'
    },
    {
      name: 'members',
      title: 'Osoby biorące udział w projekcie (opcjonalnie)',
      type: 'array',
      of: [{type: 'projectMember'}]
    },
    {
      name: 'startedAt',
      title: 'Started at',
      type: 'datetime'
    },
    {
      name: 'endedAt',
      title: 'Ended at',
      type: 'datetime'
    },
    {
      name: 'mainImage',
      title: 'Obraz miniaturka',
      type: 'figure'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'projectPortableText'
    },
    {
      name: 'relatedProjects',
      title: 'Powiązane nagrania',
      description: 'Tu wybierz i dodaj wpisy z filmami, które pojawią się w sekcji "Powiązane" (opcjonalnie)',
      type: 'array',
      of: [{type: 'reference', to: {type: 'sampleProject'}}]
    },
    {
      name: 'categories',
      title: 'Kategorie',
      description: 'Dodaj kategorie odnoszące się do nagrania (opcjonalnie)',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    },
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage',
      youtube: 'Film'
    },
    prepare({title = 'No title', publishedAt, slug = {}, media}) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
}
