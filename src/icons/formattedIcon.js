import React from 'react'

import {
  IconGithub,
  IconTwitter,
  IconInstagram,
  IconFolder,
  IconExternal,
} from '@icons'

const FormattedIcon = ({ name }) => {
  switch (name) {
    case 'Github':
      return <IconGithub />
    case 'Twitter':
      return <IconTwitter />
    case 'Instagram':
      return <IconInstagram />
    case 'External':
      return <IconExternal />
    case 'Folder':
      return <IconFolder />
    default:
      return <IconGithub />
  }
}

export default FormattedIcon
