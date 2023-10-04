import React from 'react'
import { NavLink, Outlet} from 'react-router-dom'

export default function Test() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="sharingdata" >Sharing data between components </NavLink>
        </li>
        <li>
          <NavLink to="exporttest">ExportTest</NavLink>
        </li>
        <li>
          <NavLink to="test3">test3</NavLink>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  )
}
