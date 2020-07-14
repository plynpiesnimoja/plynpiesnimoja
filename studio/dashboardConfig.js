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
                'UWAGA: Strona się generuje statycznie, dlatego po zmianach treści w CMSie trzeba będzie przejść do panelu usługi Netlify i zrobić "Build" strony. W tym celu kliknij na guzik "Manage sites at Netlify"',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio (CMS)',
                  name: '',
                  apiId: ''
                },
                {
                  buildHookId: '',
                  title: 'Strona PPM (Website)',
                  name: '',
                  apiId: ''
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
