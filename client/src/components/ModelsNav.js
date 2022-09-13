import { observer } from "mobx-react-lite";
import { action } from "mobx";

const ModelsNav = observer(({ modelStore }) => {
    const search = action(e => {
        modelStore.search = e.target.value;
    })
    return (
        <div id="search-wrapper">
            <input
                id="search-input"
                type="text"
                placeholder="Search models"
                onKeyUp={search}
            />
            <button id="reset-filters-btn" onClick={()=> window.location.reload()}>Reset filters</button>
        </div>
    )
})

export default ModelsNav