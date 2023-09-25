import React from 'react'
import { useNavigationType, useResolvedPath } from 'react-router-dom'

export default function News() {
    console.log("通过哪种路由方式访问此页面，useNavigationType: ", useNavigationType())
    console.log("resolve path: ", useResolvedPath('/user?id=001&name=test#qwe'))
    return (
        <div>
            <ul>
                <li>news01</li>
                <li>news02</li>
                <li>news03</li>
            </ul>
        </div>
    )
}
