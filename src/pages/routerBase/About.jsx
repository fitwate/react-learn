import React from 'react'
import { useInRouterContext } from 'react-router-dom'

export default function About() {
  console.log("是否在路由组件中： ",useInRouterContext())
  return (
    <div>
      I am about
    </div>
  )
}
