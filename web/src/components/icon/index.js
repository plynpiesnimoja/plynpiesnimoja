import React from 'react'

import HamburgerIcon from './hamburger'
import MenuIcon from './menu'
import CloseIcon from './close'
import DocumentDownloadIcon from './documentDownload'
import FacebookIcon from './facebook'
import LinkedinIcon from './linkedin'
import YoutubeIcon from './youtube'
import InstagramIcon from './instagram'
import TwitterIcon from './twitter'
import UserAvatarIcon from './userAvatar'
import VideoIcon from './video'

const Icon = props => {
  switch (props.symbol) {
    case 'hamburger':
      return <HamburgerIcon />
    case 'menu':
      return <MenuIcon />
    case 'close':
      return <CloseIcon />
    case 'documentDownload':
      return <DocumentDownloadIcon />
    case 'facebook':
      return <FacebookIcon />
    case 'youtube':
      return <YoutubeIcon />
    case 'instagram':
      return <InstagramIcon />
    case 'twitter':
      return <TwitterIcon />
    case 'linkedin':
      return <LinkedinIcon />
    case 'userAvatar':
      return <UserAvatarIcon />
    case 'video':
      return <VideoIcon />
    default:
      return <span>Unknown icon: {props.symbol}</span>
  }
}

export default Icon
