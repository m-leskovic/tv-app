import { observer } from "mobx-react-lite";
import { action } from "mobx";
import { Link } from "react-router-dom";

const ModelsNav = observer(({ store }) => {
    const search = action(e => {
        store.search = e.target.value;
    });
    return (
        <div id="search-wrapper">
            <input
                id="search-input"
                type="text"
                placeholder="Search models"
                onKeyUp={search}
            />
            <button id="reset-filters-btn" onClick={() => window.location.reload()}>
                <Link to="/models">Reset filters</Link>
            </button>
        </div>
    )
})

export default ModelsNav