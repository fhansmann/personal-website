import React from 'react'

import {
  IconGithub,
  IconTwitter,
  IconInstagram,
  IconCSS,
  IconHTML,
} from '@icons'

const FormattedIcon = ({ name }) => {
  switch (name) {
    case 'Github':
      return <IconGithub />
    case 'Twitter':
      return <IconTwitter />
    case 'Instagram':
      return <IconInstagram />
    case 'CSS':
      return <IconCSS />
    case 'HTML':
      return <IconHTML />
    default:
      return <IconGithub />
  }
}

export default FormattedIcon
