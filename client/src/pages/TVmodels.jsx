import ModelsNav from "../components/ModelsNav";
import ModelsSidebar from "../components/ModelsSidebar";
import Pagination from "../components/Pagination";
import React, { useEffect } from "react";
import { observer } from "mobx-react-lite"

const TVmodels = observer(({ modelStore }) => {
  return (
    <>
      <div id="models-outer-wrapper">
        <ModelsSidebar />
        <ModelsNav store={modelStore} />
        <div id="models-inner-wrapper">
          { modelStore.search.length? <SearchModels searchStore={modelStore} />
          : <AllModels models={modelStore} /> 
          }
        </div>
      </div>
      <Pagination />
    </>
  )
})

const SearchModels = observer(({ searchStore }) => {
  useEffect(() => {
    searchStore.getModels()
  }, [searchStore])
  return (
    (typeof searchStore.searchModels === "undefined")? (
      <p><b>Loading data</b></p>
    ) : (
      searchStore.searchModels.map(obj => {
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

const AllModels = observer(({ models }) => {
  useEffect(() => {
    models.getModels()
  }, [models])
  return (
    (typeof models.allModels === "undefined")? (
      <p><b>Loading data</b></p>
    ) : (
      models.allModels.map((obj, i) => {
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