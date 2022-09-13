import React from 'react';
import { observer } from "mobx-react-lite"
import { action } from 'mobx';

const ModelsSidebar = observer(({ modelStore }) => {
  const handleChange = action(e => {
    const tg = e.target;
    if (tg.checked) {
      modelStore.resArr.push(tg.value);
    } else {
      const newRes = Array.from(modelStore.resArr);
      const resIndex = newRes.indexOf(e.target.value);
      newRes.splice(resIndex, 1);
      modelStore.resArr = newRes;
    }
  })
  return (
    <div id="sidebar-wrapper">
      <div id="filters-wrapper">
        <h2 id="filters-h2">Filters</h2>
      </div>
      <div id="resolution-wrapper">
        <h3>Resolution</h3>
        <label htmlFor="2k">2K (1920 x 1080px)
          <input
            id="2k"
            type="checkbox"
            name="resolution"
            value="1920 x 1080"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="4k">4K (3840 x 2160px)
          <input
            id="4k"
            type="checkbox"
            name="resolution"
            value="3840 x 2160"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="8k">8K (7680 x 4320px)
          <input
            id="8k"
            type="checkbox"
            name="resolution"
            value="7680 x 4320"
            onChange={handleChange}
          />
        </label>
      </div>
      <div id="screen-wrapper">
        <h3>Screen size</h3>
        <label htmlFor="30-50">30-50 inch
          <input
            id="30-50"
            type="checkbox"
            name="screenSize"
            value="30-50"
          />
        </label>
        <label htmlFor="51-70">51-70 inch
          <input
            id="51-70"
            type="checkbox"
            name="screenSize"
            value="51-70"
          />
        </label>
        <label htmlFor="71">71+ inch
          <input
            id="71"
            type="checkbox"
            name="screenSize"
            value="71"
          />
        </label>
      </div>
      <div id="technology-wrapper">
        <h3>Technology</h3>
        <label htmlFor="LED">LED
          <input
            id="LED"
            type="checkbox"
            name="technology"
            value="LED"
          />
        </label>
        <label htmlFor="OLED">OLED
          <input
            id="OLED"
            type="checkbox"
            name="technology"
            value="OLED"
          />
        </label>
        <label htmlFor="QLED">QLED
          <input
            id="QLED"
            type="checkbox"
            name="technology"
            value="QLED"
          />
        </label>
      </div>
      <div id="refresh-rate-wrapper">
        <h3>Refresh rate</h3>
        <label htmlFor="50Hz">50Hz
          <input
            id="50Hz"
            type="checkbox"
            name="refreshRate"
            value="50Hz"
          />
        </label>
        <label htmlFor="60Hz">60Hz
          <input
            id="60Hz"
            type="checkbox"
            name="refreshRate"
            value="60Hz"
          />
        </label>
        <label htmlFor="120Hz">120Hz
          <input
            id="120Hz"
            type="checkbox"
            name="refreshRate"
            value="120Hz"
          />
        </label>
      </div>
  </div>
  )
})

export default ModelsSidebar