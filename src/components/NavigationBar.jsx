import React from 'react'
import {NavLink, Route} from "react-router-dom";
import About from "./pages/About";

export default function NavigationBar() {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about'className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}
