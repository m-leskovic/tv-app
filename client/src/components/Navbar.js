import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <nav id="main-nav">
        <ul id="nav-ul">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/brands">TV brands</Link></li>
            <li><Link to="/models">TV models</Link></li>
        </ul>
      </nav>
  )
}

export default Navbar