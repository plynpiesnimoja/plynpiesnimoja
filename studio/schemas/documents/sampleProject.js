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
      type: 'string',
      validation: Rule => Rule.error('No jakiś tytuł film musi mieć!').required(),
      description: 'RADA: Po prostu "Tytuł" nagrania jak na ten zamieszczony na kanale Youtube.',
    },
    {
      name: 'footage',
      title: 'Umieść film z Youtube (wymagane)',
      description: 'Dodaj film klikając poniżej "ADD" i wpisz ID filmu z adresu Youtube.',
      type: 'array',
      of: [
        {
          type: 'youtube'
        }
      ],
      validation: Rule => [
        Rule.warning('Musisz dodać film z Youtube').min(1).required(),
        Rule.max(1).error('Tylko jeden film, usuń resztę z listy')
      ],
      options: {
        isHighlighted: true
      }
    },
    // {
    //   name: 'subtitle',
    //   title: 'Podtytuł',
    //   type: 'string'
    // },
    // {
    //   name: 'youtube',
    //   title: 'Film',
    //   type: 'youtube',
    //   description: 'Tu wpisz ID youtubowego filmu',
    // },
    {
      name: 'slug',
      title: 'Odnośnik - Slug (wymagane)',
      type: 'slug',
      validation: Rule => Rule.error('Musi być wygenerowany "Slug"!').required(),
      description: 'Odnośnik, końcówka adresu bezpośrednio do strony z filmem np. www.plynpiesnimoja.pl/film/wygenerowany-ponizej-slug/". Można użyć własny ciąg znaków (bez spacji, znaków specjalnych i diakrytycznych, można użyć "-" lub wygenerować guzikiem "Generate". UWAGA: W przypadku wygenerowania z automatu, najlepiej jak pole "Tytuł" jest wypełnione.',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      title: 'Data publikacji',
      description: 'Użyj daty do utrzymania porządku chronologicznego w w sekcji "Filmy", nagrania wyświetlane bedą od najnowszego do najstarszego.',
      type: 'datetime'
    },
    {
      name: 'mainImage',
      title: 'Obraz miniaturka',
      type: 'figure'
    },
    // To consider option with no Caption
    // {
    //   name: 'coverImage',
    //   title: 'Obraz miniaturka',
    //   type: 'image'
    // },
    {
      name: 'excerpt',
      title: 'Streszczenie',
      description: 'Fragment, krótki opis pojawiający się pod miniaturką w "kafelku" na stronie z listą nagrań - również na stronie głównej w sekcji "Ostatnio dodane"',
      type: 'simplePortableText'
    },
    // {
    //   name: 'startedAt',
    //   title: 'Started at',
    //   type: 'datetime'
    // },
    // {
    //   name: 'endedAt',
    //   title: 'Ended at',
    //   type: 'datetime'
    // },
    {
      name: 'body',
      title: 'Treść główna do filmu (body)',
      description: 'Opis i treści pod nagraniem na stronie z filmem.',
      type: 'projectPortableText'
    },
    {
      name: 'members',
      title: 'Osoby biorące udział w projekcie (opcjonalnie)',
      type: 'array',
      of: [{type: 'projectMember'}]
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
    {
      name: 'description',
      title: 'Opis (opcjonalnie)',
      description: 'Dodaj opis projektu, np. fragment streszczenia dla orientacji w systemie zarzadzania treścią. Opis pojawi się w kafelku projektu w panelu z listą filmów w CMSie.',
      type: 'string'
    },
  ],
  orderings: [
    {
      title: 'Published Date, New',
      name: 'releaseDateDesc',
      by: [
        {field: 'publishedAt', direction: 'desc'}
      ]
    },
    {
      title: 'Published Date, Old',
      name: 'releaseDateAsc',
      by: [
        {field: 'publishedAt', direction: 'asc'}
      ]
    },
    // {
    //   title: 'Popularity',
    //   name: 'popularityDesc',
    //   by: [
    //     {field: 'popularity', direction: 'desc'}
    //   ]
    // }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage',
      description: 'description'
    },
    prepare({ 
      title = 'No title', 
      publishedAt, 
      slug = {}, 
      media, 
      description = 'Bez opisu' 
    }) {
      //const dateSegment = format(publishedAt, 'YYYY/MM')
      const dateSegment = format(publishedAt, 'YYYY/MM/DD')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        publishedAt,
        subtitle: publishedAt ? path : 'Missing publishing date',
        description
      }
    }
  }
}
