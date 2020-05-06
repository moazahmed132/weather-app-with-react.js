import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="navbar">
      <ul className="list">
        <NavLink activeClassName="selected" exact to="/" className="home">Home</NavLink>
        <NavLink activeClassName="selected" to="/weather" className="weather">Weather</NavLink>
      </ul>
    </div>
  )
}

export default Nav;
