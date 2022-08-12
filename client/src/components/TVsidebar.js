import React from 'react';

function TVsidebar() {
  return (
    <div id="sidebar-wrapper">
      <div id="filters-wrapper">
        <h2 id="filters-h2">Filters</h2>
      </div>
      <div id="resolution-wrapper">
        <h3>Resolution</h3>
        <p>2K (1920 x 1080px)</p>
        <p>4K (3840 x 2160px)</p>
        <p>8K (7680 x 4320px)</p>
      </div>
      <div id="screen-wrapper">
        <h3>Screen size</h3>
        <p>30-40 inch</p>
        <p>41-60 inch</p>
        <p>61-80 inch</p>
        <p>81+ inch</p>
      </div>
      <div id="technology-wrapper">
        <h3>Technology</h3>
        <p>LED</p>
        <p>OLED</p>
        <p>QLED</p>
      </div>
      <div id="refresh-rate-wrapper">
        <h3>Refresh rate</h3>
        <p>50 Hz</p>
        <p>60 Hz</p>
        <p>120 Hz</p>
      </div>
    </div>
  )
}

export default TVsidebar