import React from 'react';

function TVnavbar() {
  return (
    <nav id="models-nav">
      <div id="search-wrapper">
        <input id="search-input" type="text" placeholder="Search" />
      </div>
      <div id="sort-wrapper">
        <button id="sort-btn">Sort</button>
      </div>
    </nav>
  )
}

export default TVnavbar