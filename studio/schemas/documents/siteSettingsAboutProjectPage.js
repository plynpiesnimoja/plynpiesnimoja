export default {
  name: 'siteSettingsAboutProjectPage',
  type: 'document',
  title: 'Strona - O projekcie',
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish'
  ],
  fields: [
    {
      name: 'body',
      title: 'Treść główna na stronie (body)',
      description: 'Edycja do woli, można wrzucać zdjęcia poniżej to pola "rich text", formatowanie itd.',
      type: 'projectPortableText'
    },
  ]
}