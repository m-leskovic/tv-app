import React from 'react';
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTv } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div id="header-wrapper">
        <FontAwesomeIcon id="fa-icon" icon={faTv} />
        <Navbar />
    </div>
  )
}

export default Header