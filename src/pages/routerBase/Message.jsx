import React, { useState } from 'react'
import { Link,Outlet} from 'react-router-dom'

export default function Message() {
  const [messages] = useState(
    [
      { id: '001', title: 'msg01', content: 'xxxxx01' },
      { id: '002', title: 'msg02', content: 'xxxxx02' },
      { id: '003', title: 'msg03', content: 'xxxxx03' },
      { id: '004', title: 'msg04', content: 'xxxxx04' }
    ]
  )
  return (
    <div>
      <ul>
        {
          messages.map((m) => {
            return (
              <li key={m.id}>
                <Link to={`detail/${m.id}/${m.title}/${m.content}`}>{m.title}</Link>
              </li>
            )
          }
          )
        }
      </ul>
      <hr />
      <Outlet/>

    </div>
  )
}
