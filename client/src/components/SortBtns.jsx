import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite';
import { action } from 'mobx';

const SortBtns = observer(({ brandStore }) => {
  const sortAsc = action(() => {
    brandStore.sortedAZ = true;
    brandStore.sortedZA = false;
    let params = new URLSearchParams(window.location.search);
    params.set("sort", "asc");
    window.location.search = params.toString();
  });
  const sortDesc = action(() => {
    brandStore.sortedZA = true;
    brandStore.sortedAZ = false;
    let params = new URLSearchParams(window.location.search);
    params.set("sort", "desc");
    window.location.search = params.toString();
  });
  return (
    <div id="sort-wrapper">
      <button className="sort-btn" onClick={sortAsc}>Sort A-Z</button>
      <button className="sort-btn" onClick={sortDesc}>Sort Z-A</button>
      <button className="sort-btn">
        <Link to="/brands">Reset</Link>
      </button>
    </div>
  )
})

export default SortBtns