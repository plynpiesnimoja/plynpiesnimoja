import React from 'react'
import InputYoutubeId from '../components/input-youtube-id'

// ID from Youtube URL
// https://www.sanity.io/guides/portable-text-how-to-add-a-custom-youtube-embed-block
export const YouTubePreview = ({ value }) => {
  if (!value) {
    return <div>Dawaj ID filmu!</div>
  } else {
    return(
      <iframe
        width="256" 
        height="144"
        src={`https://www.youtube.com/embed/${value.videoId}`} 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      />
    )
  }
}



export default {
  name: 'youtube',
  title: 'Youtube Embed',
  type: 'object',
  fields: [
    {
      title: 'Youtube ID',
      name: 'videoId',
      type: 'string',
      validation: Rule => [
        Rule.error('Musisz podać "id" filmu na Youtubie').required(),
        Rule.regex( /([a-z0-9_-]{11})?/gim ).length(11).error('Użyty ID tego video nie jest poprawny, upewnij się, skopiuj i wklej ponownie.').required()
      ],
      inputComponent: InputYoutubeId,
      options: {
        isHighlighted: true
      }
    },
  ],
  preview: {
    select: {
      videoId: 'videoId',
      media: 'videoId'
    },
    component: YouTubePreview
  }
}