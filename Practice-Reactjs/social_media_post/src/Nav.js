import React from 'react'
import { Link } from 'react-router-dom'
const Nav = ({search, setSearch}) => {
  return (
    <nav className="Nav">
      <form className="searchForm" onClick={(e) => e.preventDefault()}>
        <label htmlFor="search">Search posts</label>
        <input 
          type="text"
          id="search"
          placeholder="search posts"
          value={search}
        />
      </form>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="post">Posts</Link></li>
          <li><Link to="about">About</Link></li>
        </ul>
    </nav>
  )
}

export default Nav