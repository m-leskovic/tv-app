import { action } from "mobx";
import { observer } from "mobx-react-lite";

const DeleteModel = observer(({ modelStore }) => {
  const deleteModel = action(() => {
    modelStore.handleDelete(modelStore.deleteModelId);
    cancelDelete();
  });

  const cancelDelete = action(() => {
    modelStore.showDeleteModal = false;
  });
  return (
    <div id="delete-model-wrapper">
      <h3 id="delete-model-title">
        Are you sure you want to delete {modelStore.deleteModelName}?
      </h3>
      <div id="delete-btns-wrapper">
        <button className="delete-model-btn" onClick={deleteModel}>
          Delete
        </button>
        <button className="delete-model-btn" onClick={cancelDelete}>
          Cancel
        </button>
      </div>
    </div>
  );
});

export default DeleteModel;
