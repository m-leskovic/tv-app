import ModelsSidebar from "../components/ModelsSidebar";
import ModelsNav from "../components/ModelsNav";
import DeleteModel from "../components/DeleteModel";
import CreateModel from "../components/CreateModel";
import CurrentModels from "../components/CurrentModels";
import EditModel from "../components/EditModel";
import Pagination from "../components/Pagination";
import { useEffect } from "react";
import { observer } from "mobx-react-lite"
import { action } from "mobx";

const TVmodels = observer(({ modelStore }) => {
  return (
    <>
      <div id="models-outer-wrapper">
        <ModelsSidebar />
        <ModelsNav modelStore={modelStore} />
        <div id="models-inner-wrapper">
          { modelStore.showCreateModal? <CreateModel modelStore={modelStore} /> : null }
          { modelStore.showDeleteModal? <DeleteModel modelStore={modelStore} /> : null }
          { modelStore.search.length? <SearchModels modelStore={modelStore} />
          : <AllModels modelStore={modelStore} /> 
          }
        </div>
      </div>
      <Pagination modelStore={modelStore} />
    </>
  )
})

const SearchModels = observer(({ modelStore }) => {
  useEffect(() => {
    modelStore.getModels();
  });
  const formSubmit = action(e => {
    e.preventDefault();
    const data = {...modelStore.editModel};
    const submit = {
      _id: modelStore.editId,
      model: data.model,
      screenSizeInch: data.screenSizeInch,
      resolution: data.resolution,
      technology: data.technology,
      refreshRate: data.refreshRate
    }
    const index = modelStore.dbModels.findIndex(obj => obj._id === modelStore.editId);
    const newModels = [...modelStore.dbModels];
    newModels[index] = submit;
    modelStore.editId = null;
  });
  return (
    <form id="form" onSubmit={formSubmit}>
      {modelStore.searchModels.map(model => {
        return (
          <>
            {modelStore.editId === model._id?
              <EditModel modelStore={modelStore} />
            : (typeof modelStore.searchModels === "undefined")? (
              <p><b>Loading data</b></p>
            )
            : <CurrentModels modelStore={modelStore} model={model} />
            }
          </>
        )
      })}
    </form>
  )
})

const AllModels = observer(({ modelStore }) => {
  useEffect(() => {
    modelStore.getModels();
  });
  const formSubmit = action(e => {
    e.preventDefault();
    const data = {...modelStore.editModel};
    const submit = {
      _id: modelStore.editId,
      model: data.model,
      screenSizeInch: data.screenSizeInch,
      resolution: data.resolution,
      technology: data.technology,
      refreshRate: data.refreshRate
    }
    const index = modelStore.dbModels.findIndex(obj => obj._id === modelStore.editId);
    const newModels = [...modelStore.dbModels];
    newModels[index] = submit;
    modelStore.editId = null;
  });
  return (
    <form id="form" onSubmit={formSubmit}>
      {modelStore.dbModels.map(model => {
        return (
          <>
            {modelStore.editId === model._id?
              <EditModel modelStore={modelStore} />
            : (typeof modelStore.dbModels === "undefined")? (
              <p><b>Loading data</b></p>
            )
            : <CurrentModels modelStore={modelStore} model={model} />
            }
          </>
        )
      })}
    </form>
  )
})

export default TVmodels