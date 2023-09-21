import React, { useState } from 'react'
import { Link,Outlet} from 'react-router-dom'

export default function Message2() {
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
                <Link to={`detail2?id=${m.id}&title=${m.title}&content=${m.content}`}>{m.title}</Link>
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
