import React from 'react'
import Link from 'next/link'
import cn from 'classnames'

import Image from './Image'
import Typography from './Typography'
import Categories from './Categories'

import { IPost } from '../../../interfaces/common'
import { HeadingLevel } from '../../../enums/common'

function Post({ image, date, heading, categories, view, link }: IPost) {
  const postView = cn({
    'post--simple': view === 'simple',
    'post--full': view === 'full',
  })

  const PostLink = ({ children, url, target }: { children: React.ReactNode; url: string; target: string }) => (
    <Link href={url}>
      <a className="post__link" target={target}>
        {children}
      </a>
    </Link>
  )

  return (
    <div className={`post ${postView}`}>
      {image && (
        <PostLink url={link.url} target={link.target || ''}>
          <Image className="post__image" image={image} />
        </PostLink>
      )}
      <div className="post__body">
        <ul className="post__top-info list-reset">
          <li className="post__date">{date}</li>
          <li className="post__type">Story</li>
        </ul>
        <PostLink url={link.url} target={link.target || ''}>
          <Typography text={heading} level={HeadingLevel.H3} className="post__heading" />
        </PostLink>
        {categories && categories.length ? (
          <Categories className="post__categories text-uppercase" items={categories} />
        ) : null}
      </div>
    </div>
  )
}

export default Post
