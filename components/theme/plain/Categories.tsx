import React from 'react'
import cn from 'classnames'

import { ICategoryComponent } from '../../../interfaces/common'

export default function Categories({ className, items, type = 'horizontal' }: ICategoryComponent) {
  const orientType = cn({
    'categories--horizontal': type === 'horizontal',
    'categories--vertical': type === 'vertical',
  })

  return (
    <div className={`categories ${orientType ? orientType : ''} ${className ? className : ''}`}>
      {items && items.length ? (
        <>
          <ul className="categories__list list-reset">
            {items.map((item) => (
              <li key={item.id} className="categories__item">
                {item.name}
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  )
}
