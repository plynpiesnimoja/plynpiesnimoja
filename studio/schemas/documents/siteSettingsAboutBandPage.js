export default {
  name: 'siteSettingsAboutBandPage',
  type: 'document',
  title: 'O nas',
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish'
  ],
  fields: [
    {
      name: 'bandMember',
      title: 'Osoby na liście',
      description: 'Tu wybierz osoby pojawiające się na stronie z listy profilów członków zespołu. RADA: Możesz zmienić ich kolejność pojawienia się na stronie używając ikony "drag `n` drop" z lewej strony przy zdjęciu na belce osoby.',
      type: 'array',
      of: [{type: 'persona'}]
    },
  ]
}



