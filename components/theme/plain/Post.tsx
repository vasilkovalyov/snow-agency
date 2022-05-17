import React from 'react'

interface IPost {
  title: string
  text: string
  image: string
}

function Post({ title, text, image }: IPost) {
  return (
    <div className="post">
      <div className="post__body">
        {image && <img src={image} width="500" height="400" alt={title} />}
        <h3 className="post__heading">{title}</h3>
        <p>{text}</p>
        <span className="icon-pinterest"></span>
      </div>
    </div>
  )
}

export default Post
