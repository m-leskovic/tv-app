import { useState, useEffect, React } from "react";

function TVbrands() {
  const [ dbBrands, setDbBrands ] = useState([{}]);
  useEffect(()=> {
    fetch("/brands")
    .then(response => response.json())
    .then(data => setDbBrands(data));
  }, [])
  return (
      <div id="brands-wrapper">
          {(typeof dbBrands.brand === "undefined")? (
            <p><b>Loading data</b></p>
          ) : (
            dbBrands.brand.map(item => {
              return (
                <div id="brand-items" key={item._id}>
                  <p id="brand-name">{item.brandName}</p>
                </div>
              )
            })
          )}
      </div>
  )
}

export default TVbrands