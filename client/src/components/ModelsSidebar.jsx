const ModelsSidebar = () => {
  const handleChange = e => {
    let tg = e.target;
    if (tg.checked && "URLSearchParams" in window) {
      let params = new URLSearchParams(window.location.search);
      params.set(tg.name, tg.value);
      window.location.search = params.toString();
    }
  }
  return (
    <div id="sidebar-wrapper">
      <div id="filters-wrapper">
        <h2 id="filters-h2">Filters</h2>
      </div>
      <div id="resolution-wrapper">
        <h3 className="sidebar-h3">Resolution</h3>
        <label htmlFor="2k">2K (1920 x 1080px)
            <input
              id="2k"
              type="radio"
              name="resolution"
              value="1920 x 1080"
              onChange={handleChange}
            />
        </label>
        <label htmlFor="4k">4K (3840 x 2160px)
            <input
              id="4k"
              type="radio"
              name="resolution"
              value="3840 x 2160"
              onChange={handleChange}
            />
        </label>
        <label htmlFor="8k">8K (7680 x 4320px)
            <input
              id="8k"
              type="radio"
              name="resolution"
              value="7680 x 4320"
              onChange={handleChange}
            />
        </label>
      </div>
      <div id="screen-wrapper">
        <h3 className="sidebar-h3">Screen size</h3>
        <label htmlFor="30-50">30-50 inch
          <input
            id="30-50"
            type="radio"
            name="screenRange"
            value="30-50 inch"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="51-70">51-70 inch
          <input
            id="51-70"
            type="radio"
            name="screenRange"
            value="51-70 inch"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="71">71-98 inch
          <input
            id="71-98"
            type="radio"
            name="screenRange"
            value="71-98 inch"
            onChange={handleChange}
          />
        </label>
      </div>
      <div id="technology-wrapper">
        <h3 className="sidebar-h3">Technology</h3>
        <label htmlFor="LED">LED
            <input
              id="LED"
              type="radio"
              name="technology"
              value="LED"
              onChange={handleChange}
            />
        </label>
        <label htmlFor="QLED">QLED
            <input
              id="QLED"
              type="radio"
              name="technology"
              value="QLED"
              onChange={handleChange}
            />
        </label>
        <label htmlFor="OLED">OLED
            <input
              id="OLED"
              type="radio"
              name="technology"
              value="OLED"
              onChange={handleChange}
            />
        </label>
      </div>
      <div id="refresh-rate-wrapper">
        <h3 className="sidebar-h3">Refresh rate</h3>
        <label htmlFor="50Hz">50Hz
            <input
              id="50Hz"
              type="radio"
              name="refreshRate"
              value="50Hz"
              onChange={handleChange}
            />
        </label>
        <label htmlFor="60Hz">60Hz
            <input
              id="60Hz"
              type="radio"
              name="refreshRate"
              value="60Hz"
              onChange={handleChange}
            />
        </label>
        <label htmlFor="120Hz">120Hz
            <input
              id="120Hz"
              type="radio"
              name="refreshRate"
              value="120Hz"
              onChange={handleChange}
            />
        </label>
      </div>
  </div>
  )
}

export default ModelsSidebar