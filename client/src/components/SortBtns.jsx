import React from 'react';
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite';
import { action } from 'mobx';

const SortBtns = observer(({ store }) => {
  const sortAsc = action(() => {
    store.sortedAZ = true;
    store.sortedZA = false;
    let params = new URLSearchParams(window.location.search);
    if (params.has("page")) params.delete("page");
    params.set("sort", "asc");
    window.location.search = params.toString();
  });
  const sortDesc = action(() => {
    store.sortedZA = true;
    store.sortedAZ = false;
    let params = new URLSearchParams(window.location.search);
    if (params.has("page")) params.delete("page");
    params.set("sort", "desc");
    window.location.search = params.toString();
  });
  return (
    <div id="sort-wrapper">
      <button className="sort-btn" onClick={sortAsc}>Sort A-Z</button>
      <button className="sort-btn" onClick={sortDesc}>Sort Z-A</button>
      <button className="sort-btn" onClick={()=> window.location.reload()}>
        <Link to="/brands">Reset</Link>
      </button>
    </div>
  )
})

export default SortBtns