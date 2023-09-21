import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Button } from 'antd'


export default function Detail2() {
  const [search,setSearch] = useSearchParams()
  const id = search.get('id')
  const title = search.get('title')
  const content = search.get('content')
  return (
    <div>
      <ul>
        <li>msg id {id}</li>
        <li>msg title {title}</li>
        <li>msg content {content}</li>
        <li>
          <Button onClick={()=>setSearch('id=111&title=updateTitle&content=updateContent')}>click update data</Button>
        </li>
      </ul>
    </div>
  )
}
