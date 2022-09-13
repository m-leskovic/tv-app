import React from 'react';
import { observer } from 'mobx-react-lite';
import { action } from 'mobx';

const SortBtns = observer(({ brandStore }) => {
  const sortedAZ = action(() => {
    brandStore.isSortedAZ = true;
    brandStore.isSortedZA = false;
  })
  const sortedZA = action(() => {
   brandStore.isSortedZA = true;
   brandStore.isSortedAZ = false;
  })
  return (
    <div id="sort-wrapper">
      <button className="sort-btn" onClick={sortedAZ}>Sort A-Z</button>
      <button className="sort-btn" onClick={sortedZA}>Sort Z-A</button>
      <button className="sort-btn" onClick={()=> window.location.reload()}>Reset</button>
    </div>
  )
})

export default SortBtns