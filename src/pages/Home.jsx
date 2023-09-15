import React from 'react'
import { NavLink,Outlet} from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <hr />
      <h2> home content</h2>
      <ul>
        <li>
          <NavLink to="news">news</NavLink>
        </li>
        <li>
          <NavLink to="message">message Params</NavLink>
        </li>
        <li>
          <NavLink to="message2">message2 search</NavLink>
        </li>

      </ul>
      <hr />
      <Outlet/>
    </div>
  )
}
