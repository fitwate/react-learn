import React from 'react'
import Gallery from './Gallery';
import { Profile } from './Gallery';

// 嵌套组件
function Card({ children }) {
  return (
    <div >
     <h1>嵌套组件</h1>
      {children}
    </div>
  );
}

export default function ExportTest() {
  return (
    <Card>
      <Profile />
      <Gallery
        propsV1="test props transfer"
      />
    </Card>
  )
}
