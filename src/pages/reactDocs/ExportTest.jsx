import React from 'react'
import Gallery from './Gallery';
import { Profile } from './Gallery';

// 嵌套组件
function Card({ children, title }) {
  return (
    <div >
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default function ExportTest() {
  return (
    <Card title="嵌套组件">
      <Profile />
      <Gallery
        propsV1="test props transfer"
      />
    </Card>
  )
}
