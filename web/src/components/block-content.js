import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import clientConfig from '../../client-config'
import serializers from './serializers'

import { cn } from 'src/lib/helpers'

const BlockContent = ({ blocks, className }) => (
  <div className={cn(className, 'blockContent-container')}>
    <BaseBlockContent blocks={blocks} serializers={serializers} {...clientConfig.sanity} />
  </div>
)

export default BlockContent
