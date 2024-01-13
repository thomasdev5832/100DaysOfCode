import React from 'react'

interface Props {
    title: string
    content: string
    commentsQt: number
    tags: string[]
}

const Destructuring = ({ title, content, commentsQt, tags } : Props) => {
  return (
    <div>
        <h2>Destructuring</h2>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>Quantidade de comentários:{commentsQt}</p>
        <div>
            {tags.map(tag => (
                <span>#{tag}</span>
            ))}
        </div>
    </div>
  )
}

export default Destructuring