import SortBtns from "../components/SortBtns";
import Pagination from "../components/Pagination";
import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";

const TVbrands = observer(({ brandStore }) => {
  return (
    <>
      <SortBtns store={brandStore} />
      <div id="brands-wrapper">
        <AllBrands brands={brandStore} />
      </div>
      <Pagination />
    </>
  )
})

const AllBrands = observer(({ brands }) => {
  useEffect(() => {
    brands.getBrands()
  }, [brands])
  return (
    <div id="brands-wrapper">
      {(typeof brands.allBrands === "undefined")? (
        <p><b>Loading data</b></p>
      ) : (
        brands.allBrands.map(obj => {
          return (
            <div id="brand-items" key={obj._id}>
              <img id="brand-logo" src={obj.logo} alt="Brand logo" />
              <p id="brand-name">{obj.brandName}</p>
            </div>
          )
        })
      )}
    </div>
  )
})

export default TVbrands