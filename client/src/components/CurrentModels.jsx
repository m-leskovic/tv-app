import { action } from "mobx";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer } from "mobx-react-lite";

const CurrentModels = observer(({ model, modelStore }) => {
  const handleEditMode = action((e, model) => {
    e.preventDefault();
    const edited = {
      model: model.model,
      screenSizeInch: model.screenSizeInch,
      resolution: model.resolution,
      technology: model.technology,
      refreshRate: model.refreshRate,
    };
    modelStore.editId = model._id;
    modelStore.editModel = edited;
  });

  const deleteModel = action(() => {
    modelStore.showDeleteModal = true;
    modelStore.deleteModelName = model.model;
    modelStore.deleteModelId = model._id;
  });
  return (
    <div id="model-items" key={model._id}>
      <div id="model-div">
        <button className="model-btn" onClick={(e) => handleEditMode(e, model)}>
          Edit
        </button>
        <button className="model-btn" onClick={deleteModel}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <p id="model-name">
          Model: <b>{model.model}</b>
        </p>
      </div>
      <p id="model-specs">
        {model.screenSizeInch} inch, {model.resolution}, {model.technology},{" "}
        {model.refreshRate}
      </p>
    </div>
  );
});

export default CurrentModels;
