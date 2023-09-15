import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
  const{id,title,content} = useParams()
  return (
    <div>
      <ul>
        <li>msg.id {id}</li>
        <li>msg.title {title}</li>
        <li>msg.content {content}</li>
      </ul>
    </div>
  )
}
