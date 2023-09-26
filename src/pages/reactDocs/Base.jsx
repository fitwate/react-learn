import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Base() {
  return (
    <div>
      this is base 
      <div><NavLink to="https://react.docschina.org/learn" target="_blank">Learn From 1 </NavLink></div>
      <div><NavLink to="https://react.dev/learn" target="_blank">Learn From 2 </NavLink></div>
    </div>
  )
}
