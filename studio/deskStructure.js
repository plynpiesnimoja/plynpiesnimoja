import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'
import MdNote from 'react-icons/lib/md/note'

const hiddenDocTypes = listItem =>
  !['category', 'gallery', 'person', 'sampleProject', 'siteSettings', 'siteSettingsMainPage'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Kontent')
    .items([
      S.listItem()
        .title('Strona Główna (index)')
        .child(
          S.editor()
            .id('siteSettingsMainPage')
            .schemaType('siteSettingsMainPage')
            .documentId('siteSettingsMainPage')
            .title('Treści na "Stronie głównej"')
        )
        .icon(MdNote),
      S.listItem()
        .title('Ogólne ustawienia strony')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      S.listItem()
        .title('Filmy')
        .schemaType('sampleProject')
        .child(S.documentTypeList('sampleProject').title('Dodane wpisy z filmami')),
      S.listItem()
        .title('Ludzie')
        .schemaType('person')
        .child(S.documentTypeList('person').title('Osoby')),
      S.listItem()
        .title('Galeria')
        .schemaType('gallery')
        .child(S.documentTypeList('gallery').title('Dodane zdjęcia')),
      S.listItem()
        .title('Kategorie')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Kategorie')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
