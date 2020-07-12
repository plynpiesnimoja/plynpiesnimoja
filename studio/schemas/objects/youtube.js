import React from 'react'

const YouTubePreview = (props) => (<pre>{JSON.stringlify(props, null, 2)}</pre>)

export default {
  name: 'youtube',
  title: 'Youtube Embed',
  type: 'object',
  fields: [
    {
      title: 'URL',
      name: 'url',
      type: 'url'
    }

  ],
  preview: {
    select: {
      url: 'url'
    },
    component: YouTubePreview,
  }
}