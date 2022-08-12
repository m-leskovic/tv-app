import TVnavbar from "../components/TVnavbar";
import TVsidebar from "../components/TVsidebar";
import { useState, useEffect, React } from "react";

function TVmodels() {
  const [ dbModels, setDbModels ] = useState([{}]);
  useEffect(()=> {
    fetch("/models")
    .then(response => response.json())
    .then(data => setDbModels(data));
  }, [])
  return (
    <div id="models-outer-wrapper">
      <TVsidebar />
      <TVnavbar />
      <div id="models-inner-wrapper">
          {(typeof dbModels.model === "undefined")? (
            <p><b>Loading data</b></p>
          ) : (
            dbModels.model.map(item => {
              return (
                <div id="model-items" key={item._id}>
                  <p id="model-name">model: <b>{item.model}</b></p>
                  <p id="model-specs">
                    {item.screenSize}, {item.resolution}, {item.technology}, {item.refreshRate}
                  </p>
                </div>
              )
            })
          )}
      </div>
    </div>
  )
}

export default TVmodels