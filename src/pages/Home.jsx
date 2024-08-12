import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1>Home page</h1>
        <Link to="posts">See new posts?</Link>
    </div>
  )
}

export default Home