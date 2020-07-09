import React from 'react'

import {
  IconGithub,
  IconInstagram,
  IconTwitter,
  IconMail,
} from '@icons'

const FormattedIcon = ({ name }) => {
  switch (name) {
    case 'Github':
      return <IconGithub />
    case 'Instagram':
      return <IconInstagram />
    case 'Twitter':
      return <IconTwitter />
    case 'Mail':
      return <IconMail />
    default:
      return <IconGithub />
  }
}

export default FormattedIcon
