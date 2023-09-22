import React from 'react'
import { useNavigationType, useResolvedPath } from 'react-router-dom'

export default function News() {
    console.log("useNavigationType: ", useNavigationType())
    console.log("resolve path: ", useResolvedPath('/user?id=001&name=test'))
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
