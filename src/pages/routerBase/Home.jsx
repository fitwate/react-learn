import { Button } from 'antd'
import React, { useState } from 'react'
import { NavLink, Navigate, Outlet} from 'react-router-dom'

export default function Home() {
  const [sum, setSum] = useState(1)
  return (
    <div>
     {/* Navigate 加载即执行 */}
      <h2> home content</h2>
      {sum === 1 ? <h4>sum value is {sum}</h4> : <Navigate to="/about" />}
      <Button onClick={() => setSum(2)}>click me sum change to 2</Button>
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
      <Outlet />
    </div>
  )
}
