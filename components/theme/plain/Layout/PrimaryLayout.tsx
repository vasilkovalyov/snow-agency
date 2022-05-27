import React from 'react'

import { Block } from '../../../../enums/blocks'
import { renderByContentType } from '../../../../components'

export default function Header({ children }: { children: React.ReactNode }) {
  const header = renderByContentType(Block.BlockHeader)
  const footer = renderByContentType(Block.BlockFooter)

  return (
    <div id="wrapper">
      {header}
      <main className="main">{children}</main>
      {footer}
    </div>
  )
}
