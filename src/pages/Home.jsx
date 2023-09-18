import React from 'react'
import { NavLink,Outlet,useOutlet} from 'react-router-dom'

export default function Home() {
  console.log(useOutlet())
  return (
    <div>
      <hr />
      <h2> home content</h2>
      <ul>
        <li>
          <NavLink to="news" replace >news</NavLink>
        </li>
        <li>
          <NavLink to="message">message Params</NavLink>
        </li>
        <li>
          <NavLink to="message2">message2 search</NavLink>
        </li>
        <li>
          <NavLink to="message3">message3 state</NavLink>
        </li>

      </ul>
      <hr />
      <Outlet/>
    </div>
  )
}
