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
          <NavLink to="learnif">LearnIf</NavLink>
        </li>
        <li>
          <NavLink to="renderinglists">RenderingLists</NavLink>
        </li>
        <li>
          <NavLink to="respondingtoevents">RespondingToEvents</NavLink>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  )
}
