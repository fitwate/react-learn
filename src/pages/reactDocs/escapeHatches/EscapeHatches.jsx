import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function EscapeHatches() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="refbase" >RefBase </NavLink>
                </li>
                <li>
                    <NavLink to="customhooksbase" >Custom Hooks: Sharing logic between components </NavLink>
                </li>
            </ul>
            <hr />
            <Outlet />
        </div>
    )
}
