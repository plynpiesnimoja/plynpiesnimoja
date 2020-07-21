import MdPerson from 'react-icons/lib/md/person'

export default {
  name: 'person',
  type: 'document',
  title: 'Person',
  icon: MdPerson,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nazwa',
      description: 'Imię, nazwisko, pseudonim artystyczny'
    },
    {
      name: 'role',
      type: 'string',
      title: 'Opis',
      description: 'Krótki opis osoby, rola w projekcie, zawód itd. Maksymalnie 128 znaków.',
      validation: Rule => Rule.max(196).error("Opis musi mieć maksymalnie 128 znaków!"),
      options: {
        source: 'name',
        maxLength: 196
      }
    },
    // {
    //   name: 'slug',
    //   type: 'slug',
    //   title: 'Slug',
    //   description: 'Some frontend will require a slug to be set to be able to show the person',
    //   options: {
    //     source: 'name',
    //     maxLength: 96
    //   }
    // },
    {
      name: 'image',
      title: 'Zdjęcie',
      type: 'figure'
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'bioPortableText'
    },
    {
      name: 'attachment',
      title: 'Załącznik',
      type: 'attachment',
      options: {
        storeOriginalFilename: true
      }
    },
    {
      name: 'links',
      title: 'Odnośniki',
      type: 'socialMediaLinks',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: false, // Defines if the fieldset should be collapsed by default or not
        columns: 2 // Defines a grid for the fields and how many columns it should have
      }
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
