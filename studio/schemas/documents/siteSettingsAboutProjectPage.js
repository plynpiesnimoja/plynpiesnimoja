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
      title: 'Body',
      description: 'Lorem ipsum',
      type: 'projectPortableText'
    },
  ]
}