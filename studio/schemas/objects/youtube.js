import React from 'react'


// ID from Youtube URL
// https://www.sanity.io/guides/portable-text-how-to-add-a-custom-youtube-embed-block
export const YouTubePreview = ({ value }) => (
  <iframe 
    // width="560" 
    // height="315"
    width="256" 
    height="144"
    src={`https://www.youtube.com/embed/${value.videoId}`} 
    frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  />
)


export default {
  name: 'youtube',
  title: 'Youtube Embed',
  type: 'object',
  // options: {
  //   hotspot: true
  // },
  fields: [
    {
      title: 'Youtube ID',
      name: 'videoId',
      type: 'string',
      validation: Rule => Rule.error('Musisz podać "id" filmu na Youtubie').required(),
      options: {
        isHighlighted: true
      }
    },
    // {
    //   title: 'Url',
    //   name: 'url',
    //   type: 'url'
    // }

  ],
  preview: {
    select: {
      //url: 'url',
      videoId: 'videoId',
      media: 'videoId'
    },
    component: YouTubePreview
  }
}