import { action } from "mobx";
import { observer } from "mobx-react-lite";

const EditModel = observer(({ modelStore }) => {
  let editModel = modelStore.editModel;
  let editId = modelStore.editId;

  const handleChange = action((e) => {
    let name = e.target.name;
    let value = e.target.value;
    const newModel = { ...modelStore.editModel };
    newModel[name] = value;
    modelStore.editModel = newModel;
  });

  const updateModel = () => {
    modelStore.handleUpdate(editId, editModel);
  };

  const cancelEdit = action(() => {
    modelStore.editId = null;
  });
  return (
    <div id="edit-form-items">
      <input
        type="text"
        name="model"
        value={editModel.model}
        onChange={handleChange}
        placeholder="Enter model name"
        required
      />
      <input
        type="number"
        min="30"
        max="98"
        name="screenSizeInch"
        value={editModel.screenSizeInch}
        onChange={handleChange}
        placeholder="Enter screen size"
        required
      />
      <input
        type="text"
        name="resolution"
        value={editModel.resolution}
        onChange={handleChange}
        placeholder="Enter resolution"
        required
      />
      <input
        type="text"
        name="technology"
        value={editModel.technology}
        onChange={handleChange}
        placeholder="Enter screen technology"
        required
      />
      <input
        type="text"
        name="refreshRate"
        value={editModel.refreshRate}
        onChange={handleChange}
        placeholder="Enter refresh rate"
        required
      />
      <div id="form-btns-div">
        <button className="form-btn" type="submit" onClick={updateModel}>
          Save
        </button>
        <button className="form-btn" onClick={cancelEdit}>
          Cancel
        </button>
      </div>
    </div>
  );
});

export default EditModel;
