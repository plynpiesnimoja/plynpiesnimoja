export default {
  type: 'object',
  name: 'projectMember',
  title: 'Project Member',
  fields: [
    {
      title: 'Osoba',
      name: 'person',
      type: 'reference',
      to: {type: 'person'}
    },
    {
      title: 'Rola i udział w projekcie (opcjonalnie)',
      name: 'roles',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'radio',
        list: [
          {title: 'Designer', value: 'designer'},
          {title: 'Developer', value: 'developer'},
          {title: 'Montaż', value: 'montaż'},
          {title: 'Manager', value: 'manager'},
          {title: 'Prowadzenie', value: 'prowadzenie'},
          {title: 'Wokal', value: 'wokal'}
        ]
      }
    }
  ],
  preview: {
    select: {
      personName: 'person.name',
      roles: 'roles',
      media: 'person.image'
    },
    prepare (data) {
      return {
        ...data,
        title: data.personName,
        subtitle: data.roles && data.roles.join('/')
      }
    }
  }
}
