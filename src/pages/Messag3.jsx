import { Button } from 'antd'
import React, { useState } from 'react'
import { Link, Outlet,useNavigate } from 'react-router-dom'

export default function Message3() {
  const navigate = useNavigate()
  const [messages] = useState(
    [
      { id: '001', title: 'msg01', content: 'xxxxx01' },
      { id: '002', title: 'msg02', content: 'xxxxx02' },
      { id: '003', title: 'msg03', content: 'xxxxx03' },
      { id: '004', title: 'msg04', content: 'xxxxx04' }
    ]
  )
  function showdetail(m){
   navigate('detail3',{
    replace:false,
    state:{
      id:m.id,
      title:m.title,
      content:m.content
    }
   })
  }

  function back(){
    navigate(-1)

  }
  function forward(){
    navigate(1)
    
  }

  return (
    <div>
      <ul>
        {
          messages.map((m) => {
            return (
              <li key={m.id}>
                <Link
                  to="detail3"
                  state={{
                    id: m.id,
                    title: m.title,
                    content: m.content,
                  }}>
                  {m.title} 
                </Link>
                <span> </span>
                <Button onClick={()=>showdetail(m)}>Get Detail</Button>
              </li>
            )
          }
          )
        }
       
      </ul>
      <Button onClick={back}>后退</Button>
      <span> </span>
      <Button onClick={forward}>前进</Button>
      <hr />
      <Outlet />

    </div>
  )
}
