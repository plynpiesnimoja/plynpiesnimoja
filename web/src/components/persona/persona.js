import React from 'react'

import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'

const Persona = (props) => {
  const { container, avatar } = props
  return(
    <div>
          <img
            src={imageUrlFor(buildImageObj(avatar))
              .width(1920)
              .height(Math.floor((9 / 16) * 1920))
              .fit('crop')
              .url()}

            // TO-DO Alt Text for Avatar -> if any 
            //alt={props.heroImage.alt}
          />
    </div>
  )
}

export default Persona