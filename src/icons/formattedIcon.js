import React from 'react'

import {
  IconGithub,
  IconTwitter,
  IconInstagram,
  IconFolder,
  IconExternal,
  IconDev,
  IconAvatar
} from '@icons'

const FormattedIcon = ({ name }) => {
  switch (name) {
    case 'Github':
      return <IconGithub />
    case 'Twitter':
      return <IconTwitter />
    case 'Instagram':
      return <IconInstagram />
    case 'Dev':
      return <IconDev />
    case 'External':
      return <IconExternal />
    case 'Folder':
      return <IconFolder />
    case 'Avatar':
      return <IconAvatar/>
    default:
      return <IconGithub />
  }
}

export default FormattedIcon
