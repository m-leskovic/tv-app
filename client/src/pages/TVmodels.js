import ModelsNav from "../components/ModelsNav";
import ModelsSidebar from "../components/ModelsSidebar";
import Pagination from "../components/Pagination";
import React, { useEffect } from "react";
import { observer } from "mobx-react-lite"

const TVmodels = observer(({ modelStore }) => {
  useEffect(() => {
    modelStore.getModels()
  }, [modelStore])
  const setModelPage = pgNum => modelStore.setPage(pgNum);
  return (
    <>
      <div id="models-outer-wrapper">
        <ModelsSidebar modelStore={modelStore} />
        <ModelsNav modelStore={modelStore} />
        <div id="models-inner-wrapper">
          { modelStore.resArr.length? <FilterModels store={modelStore} />
          : modelStore.searchModels.length? <SearchModels store={modelStore} />
          : <CurrentModels currentStore={modelStore} /> 
          }
        </div>
      </div>
      <Pagination 
        allModels={modelStore.allModels.length}
        modelsPerPage={modelStore.modelsPerPage}
        setModelPage={setModelPage}
      />
    </>
  )
})

const CurrentModels = observer(({ currentStore }) => {
  return (
    (typeof currentStore.currentModels === "undefined")? (
      <p><b>Loading data</b></p>
    ) : (
      currentStore.currentModels.map(obj => {
        return (
          <div id="model-items" key={obj._id}>
            <p id="model-name">model: <b>{obj.model}</b></p>
            <p id="model-specs">
              {obj.screenSize}, {obj.resolution}, {obj.technology}, {obj.refreshRate}
            </p>
        </div>
        )
      })
    )
  )
})

const FilterModels = observer(({ store }) => {
  return (
    ( store.allModels.filter(obj => store.resArr.includes(obj.resolution))
      .slice(store.indexFirstModel, store.indexLastModel).map(obj => {
        return (
          <div id="model-items" key={obj._id}>
            <p id="model-name">model: <b>{obj.model}</b></p>
            <p id="model-specs">
              {obj.screenSize}, {obj.resolution}, {obj.technology}, {obj.refreshRate}
            </p>
          </div>
        )
      })
    )
  )
})

const SearchModels = observer(({ store }) => {
  return (
    (typeof store.searchModels === "undefined")? (
      <p><b>Loading data</b></p>
    ) : (
      store.searchModels.map((obj, i) => {
        return (
          <div id="model-items" key={i}>
            <p id="model-name">model: <b>{obj.model}</b></p>
            <p id="model-specs">
              {obj.screenSize}, {obj.resolution}, {obj.technology}, {obj.refreshRate}
            </p>
        </div>
        )
      })
    )
  )
})

export default TVmodels