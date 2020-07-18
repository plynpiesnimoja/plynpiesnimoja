



export default {
  title: 'Odnośniki',
  name: 'socialMediaLinks',
  type: 'object',


  // fieldsets: [
  //   {
  //     title: 'Social media handles',
  //     name: 'social',
  //     options: {
  //       collapsible: true, // Makes the whole fieldset collapsible
  //       collapsed: false, // Defines if the fieldset should be collapsed by default or not
  //       columns: 2 // Defines a grid for the fields and how many columns it should have
  //     }
  //   }
  // ],
  // fields: [
  //   {
  //     title: 'Twitter',
  //     name: 'twitter',
  //     type: 'string',
  //     fieldset: 'social'
  //   },
  //   {
  //     title: 'Instagram',
  //     name: 'instagram',
  //     type: 'string',
  //     fieldset: 'social'
  //   },
  //   {
  //     title: 'Facebook',
  //     name: 'facebook',
  //     type: 'string',
  //     fieldset: 'social'
  //   }
  // ]
  
  fields: [
    {
      name: 'twitter', 
      type: 'url', 
      title: 'Twitter'
    },
    {
      name: 'facebook', 
      type: 'url', 
      title: 'Facebook'
    },
    {
      name: 'youtube', 
      type: 'url', 
      title: 'Youtube'
    },
    {
      name: 'instagram', 
      type: 'url', 
      title: 'Instagram'
    },
    {
      name: 'linkedin', 
      type: 'url', 
      title: 'Linkedin'
    }
  ]
}