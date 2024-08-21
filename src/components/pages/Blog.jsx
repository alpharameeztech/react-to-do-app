import React from 'react'
import {Link} from "react-router-dom";
import Reddit from "../Reddit";
export default function Blog() {
  return (
    <div className='container'>
        <Reddit />
        <ul>
            <li>
                <Link to='/blog/1'>Post 1</Link>
            </li>
            <li>
                <Link to='/blog/2'>Post 2</Link>
            </li>
        </ul>
    </div>
  )
}
