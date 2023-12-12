import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function EscapeHatches() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="refbase" >RefBase </NavLink>
                </li>
            </ul>
            <hr />
            <Outlet />
        </div>
    )
}
