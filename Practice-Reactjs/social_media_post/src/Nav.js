import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from './Context/DataContext'
const Nav = () => {
  const {search, setSearch} = useContext(DataContext)
    return (
      <nav className="Nav">
        <form className="searchForm" onClick={(e) => e.preventDefault()}>
          <label htmlFor="search">Search posts</label>
          <input 
            type="text"
            id="search"
            placeholder="search posts"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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