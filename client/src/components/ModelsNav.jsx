import { observer } from "mobx-react-lite";
import { action } from "mobx";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ModelsNav = observer(({ modelStore }) => {
    const search = action(e => {
        modelStore.search = e.target.value;
    });
    const modalShow = action(() => {
        modelStore.showCreateModal = true;
      });
    return (
        <div id="search-wrapper">
            <input
                id="search-input"
                type="text"
                placeholder="Search models"
                onKeyUp={search}
            />
            <div id="search-btn-wrapper">
                <button id="add-btn" onClick={modalShow}>
                    Add new <FontAwesomeIcon icon={faPlus} />
                </button>
                <button id="reset-filters-btn">
                    <Link to="/models">Reset filters</Link>
                </button>
            </div>
        </div>
    )
})

export default ModelsNav