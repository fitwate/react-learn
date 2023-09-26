import React from 'react'
import { NavLink, useInRouterContext } from 'react-router-dom'

export default function About() {
  console.log("是否在路由组件中： ",useInRouterContext())
  return (
    <div>
      I am about
      <div><NavLink to="https://www.bilibili.com/video/BV1wy4y1D7JT?p=127" target="_blank">Learn From</NavLink></div>
      
    </div>
  )
}
