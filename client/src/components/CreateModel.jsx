import { observer } from "mobx-react-lite"
import { action } from "mobx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const CreateModel = observer(({ modelStore }) => {
  let create = modelStore.createModel;
  const modalHide = action(() => {
    modelStore.showCreateModal = false;
  });
  const handleChange = action(e => {
    let name = e.target.name;
    let value = e.target.value;
    create[name] = value;
  });
  const handleScreenChange = action(e => {
    let name = e.target.name;
    let value = e.target.value;
    if (value >= 30 && value <= 50) {
      create.screenRange = "30-50 inch"
    } else if (value >= 51 && value <= 70) {
      create.screenRange = "51-70 inch"
    } else if (value >= 71 && value <= 98) {
      create.screenRange = "71-98 inch"
    }
    create[name] = value;
  });
  const submitNewModel = action(e => {
    e.preventDefault();
    modelStore.handleCreate(create);
    modelStore.showCreateModal = false;
  });
  return (
    <div id="create-modal-wrapper">
      <button id="cancel-btn" onClick={modalHide}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <h2 id="create-h2">Add a new TV model</h2>
      <form id="create-form-wrapper" onSubmit={submitNewModel}>
          <label className="create-label"><b>Model name</b></label>
          <input
            type="text"
            name="model"
            value={create.model}
            onChange={handleChange}
            placeholder="e.g. Q60A"
            required
          />
          <label className="create-label"><b>Screen size (inch)</b></label>
            <input
              type="number"
              name="screenSizeInch"
              min="30"
              max="98"
              value={create.screenSizeInch}
              onChange={handleScreenChange}
              placeholder="e.g. 50"
              required
            />
          <label className="create-label"><b>Resolution</b></label>
          <label className="create-radio-label">2K (1920 x 1080px)
            <input
              type="radio"
              name="resolution"
              value={create.resolution[0]}
              onChange={handleChange}
              required
            />
          </label>
          <label className="create-radio-label">4K (3840 x 2160px)
            <input
              type="radio"
              name="resolution"
              value={create.resolution[1]}
              onChange={handleChange}
              required
            />
          </label>
          <label className="create-radio-label">8K (7680 x 4320px)
            <input
              type="radio"
              name="resolution"
              value={create.resolution[2]}
              onChange={handleChange}
              required
              />
          </label>
          <label className="create-label"><b>Technology</b></label>
          <label className="create-radio-label">LED
            <input
              type="radio"
              name="technology"
              value={create.technology[0]}
              onChange={handleChange}
              required
            />
          </label>
          <label className="create-radio-label">QLED
              <input
                type="radio"
                name="technology"
                value={create.technology[1]}
                onChange={handleChange}
                required
              />
          </label>
          <label className="create-radio-label">OLED
              <input
                type="radio"
                name="technology"
                value={create.technology[2]}
                onChange={handleChange}
                required
              />
          </label>
          <label className="create-label"><b>Refresh rate</b></label>
          <label className="create-radio-label">50Hz
            <input
              type="radio"
              name="refreshRate"
              value={create.refreshRate[0]}
              onChange={handleChange}
              required
            />
          </label>
          <label className="create-radio-label">60Hz
              <input
                type="radio"
                name="refreshRate"
                value={create.refreshRate[1]}
                onChange={handleChange}
                required
              />
          </label>
          <label className="create-radio-label">120Hz
              <input
                type="radio"
                name="refreshRate"
                value={create.refreshRate[2]}
                onChange={handleChange}
                required
              />
          </label>
          <button type="submit" id="submit-btn">Submit</button>
      </form>
  </div>
  )
})

export default CreateModel