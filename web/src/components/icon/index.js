import React from 'react'
import HamburgerIcon from './hamburger'
import DocumentDownloadIcon from './documentDownload'
import FacebookIcon from './facebook'
import LinkedinIcon from './linkedin'
import YoutubeIcon from './youtube'
import InstagramIcon from './instagram'
import TwitterIcon from './twitter'
import UserAvatarIcon from './userAvatar'

function Icon (props) {
  switch (props.symbol) {
    case 'hamburger':
      return <HamburgerIcon />
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
    default:
      return <span>Unknown icon: {props.symbol}</span>
  }
}

export default Icon
