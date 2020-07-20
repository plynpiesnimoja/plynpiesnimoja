export default {
  name: 'siteSettingsMainPage',
  type: 'document',
  title: 'Strona Główna',
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish'
  ],
  fields: [
    {
      name: 'welcomeHeader',
      type: 'string',
      title: 'Nagłówek powitalny',
      description: 'Tu krótkie hasło powitalne, np."Witajcie!"'
    },
    {
      name: 'body',
      title: 'Tekst powitalny',
      type: 'simplePortableText',
      description: 'Treść pod nagłówkiem powitalnym'
    },
    {
      name: 'heroImage',
      title: 'Zdjęcie główne (tło)',
      type: 'image',
      options: {
        hotspot: true
      },
      description: 'Zdjęcie powitalne na całą stronę, tzw. "Hero Image"'
    },
  ]
}
