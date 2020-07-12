import React from 'react'

export const YouTubePreview = (props) => (<pre>{JSON.stringlify(props, null, 2)}</pre>)



export const YT = () => (
  <iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/kLsER_zHiS4" 
    frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen
  >

  </iframe>
)


export default {
  name: 'youtube',
  title: 'Youtube Embed',
  type: 'object',
  fields: [
    {
      title: 'Youtube ID',
      name: 'videoId',
      type: 'string'
    },
    // {
    //   title: 'Url',
    //   name: 'url',
    //   type: 'url'
    // }

  ],
  preview: {
    select: {
      url: 'url',
      videoId: 'string'
    },
    component: YouTubePreview,
  }
}