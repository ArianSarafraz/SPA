import React from 'react'
import { Link } from 'react-router-dom'

function Posts() {
  return (
    <div>
      <h1>posts page</h1>
      <ul>
        <li>
          <Link to="1?category=frontend&sort=latest">Post 1</Link>
        </li>
        <li>
          <Link to="2">Post 2</Link>
        </li>
        <li>
          <Link to="3">Post 3</Link>
        </li>
      </ul>
    </div>
  )
}

export default Posts