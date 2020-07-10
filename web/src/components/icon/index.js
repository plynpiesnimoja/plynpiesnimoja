import React from 'react'
import HamburgerIcon from './hamburger'
import FacebookIcon from './facebook'
import YoutubeIcon from './youtube'
import InstagramIcon from './instagram'

function Icon (props) {
  switch (props.symbol) {
    case 'hamburger':
      return <HamburgerIcon />
    case 'facebook':
      return <FacebookIcon />
    case 'youtube':
      return <YoutubeIcon />
    case 'instagram':
      return <InstagramIcon />
    default:
      return <span>Unknown icon: {props.symbol}</span>
  }
}

export default Icon
