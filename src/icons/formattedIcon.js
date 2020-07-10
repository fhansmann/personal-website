import React from 'react'

import {
  IconGithub,
  IconTwitter,
  IconInstagram,
} from '@icons'

const FormattedIcon = ({ name }) => {
  switch (name) {
    case 'Github':
      return <IconGithub />
    case 'Twitter':
      return <IconTwitter />
    case 'Instagram':
      return <IconInstagram />
    default:
      return <IconGithub />
  }
}

export default FormattedIcon
