import Icon from 'react-icons/lib/md/image'


export default {
  name: 'gallery',
  type: 'document',
  title: 'Photo',
  icon: Icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
      description: 'Keep it short.'
    },
    {
      name: 'image',
      title: 'Zdjęcie',
      type: 'figure'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your portfolio for search engines and social media.'
    },
  ]
}
