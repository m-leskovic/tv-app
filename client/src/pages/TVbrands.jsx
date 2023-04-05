import SortBtns from "../components/SortBtns";
import Pagination from "../components/Pagination";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

const TVbrands = observer(({ brandStore }) => {
  return (
    <>
      <SortBtns brandStore={brandStore} />
      <div id="brands-outer-wrapper">
        <AllBrands brandStore={brandStore} />
      </div>
      <Pagination brandStore={brandStore} />
    </>
  )
})

const AllBrands = observer(({ brandStore }) => {
  useEffect(() => {
    brandStore.getBrands();
  })
  return (
    <div id="brands-inner-wrapper">
      {(typeof brandStore.dbBrands === "undefined")? (
        <p><b>Loading data</b></p>
      ) : (
        brandStore.dbBrands.map(obj => {
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