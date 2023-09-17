import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Detail3() {
  const {state:{id,title,content}} = useLocation()

  return (
    <div>
      <ul>
        <li>msg id {id}</li>
        <li>msg title {title}</li>
        <li>msg content {content}</li>
      </ul>
    </div>
  )
}
