import React from 'react'

export const YTProto = (props) => (<pre>{JSON.stringlify(props, null, 2)}</pre>)



export const YouTubePreview = ({ value }) => (
  <>
  {console.log(value.videoId)}
  <iframe 
    width="560" 
    height="315" 
    // src="https://www.youtube.com/embed/kLsER_zHiS4"
    src={`https://www.youtube.com/embed/${value.videoId}`} 
    frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  >

  </iframe>
  </>
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
    component: YouTubePreview,
    // prepare({title = 'No title', publishedAt, slug = {}, media}) {
    //   //const dateSegment = format(publishedAt, 'YYYY/MM')
    //   const dateSegment = format(publishedAt, 'YYYY/MM/DD')
    //   const path = `/${dateSegment}/${slug.current}/`
    //   return <YTProto />
    // }
  }
}