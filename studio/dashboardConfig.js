export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
    //   }
    // },
    {
      name: 'structure-menu',
      options: {
        title: 'Edytuj stronę'
      }
    },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            
            options: {
              title: 'Netlify Panel',
              description:
                'UWAGA: Strona się generuje statycznie, dlatego po zmianach treści w CMSie trzeba będzie kliknąć guzik "Deploy". Jeżeli status pokaże się "Failed", można proces powtórzyć, nie przyniesie zmiany to ponownie. Jeśli to to nie przyniesie skutku, telefon lub wiadomosć do Dominika :)',
              sites: [
                {
                  buildHookId: '5f034b785334fcaa85abf05d',
                  title: 'Website: Strona PPM',
                  name: 'plynpiesnimoja',
                  apiId: '31763108-e2fb-4d31-b80c-f876dcdf7c2c'
                },
                {
                  // buildHookId: '5f034b781c90d6ac6ce49d03', 
                  title: 'CMS: Sanity Studio',
                  name: 'plynpiesnimoja-studio',
                  apiId: '099694ec-fb08-42c6-9a98-146f19ef55eb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/plynpiesnimoja/plynpiesnimoja',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: '',
            category: 'apps'
          }
        ]
      }
    },
    {
      name: 'project-users', 
      options: {
        title: 'Użytkownicy, edytorzy' 
      },
      layout: { height: 'auto' }
    },
    {
      name: 'document-list',
      options: { title: 'Ostatnio dodane filmy', order: '_createdAt desc', types: ['sampleProject'] },
      layout: { width: 'medium' }
    }
  ]
}
