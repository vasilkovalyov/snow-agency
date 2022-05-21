import React from 'react'
import Link from 'next/link'

import { INavigation } from '../../../../interfaces/pages'

export default function Navigation({ navigation, className }: { navigation: INavigation; className?: string }) {
  const pages = navigation.pages || []
  return (
    <nav className={`navigation ${className}`}>
      <ul className="navigation__list list-reset">
        {pages && pages.length ? (
          <>
            {pages.map((page) => (
              <li key={page.id} className="navigation__item">
                <Link href={page.slug === 'home' ? '/en/' : `/en/${page.slug}`}>
                  <a className="navigation__link">{page.title}</a>
                </Link>
              </li>
            ))}
          </>
        ) : null}
      </ul>
    </nav>
  )
}
