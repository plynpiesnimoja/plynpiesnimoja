import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import serializers from './serializers'

import { cn } from 'src/lib/helpers'

const BlockText = ({ blocks, className }) => (
  <div className={cn(className, 'blockText-container')}>
    <BaseBlockContent blocks={blocks} serializers={serializers} />
  </div>
)

export default BlockText
