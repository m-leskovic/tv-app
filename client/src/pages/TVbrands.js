import SortBtns from "../components/SortBtns";
import Pagination from "../components/Pagination";
import React, { useEffect } from "react"
import { observer } from "mobx-react-lite"

const TVbrands = observer(({ brandStore }) => {
  useEffect(() => {
    brandStore.getBrands()
  }, [brandStore])
  const setBrandPage = pgNum => brandStore.setPage(pgNum);
  return (
    <>
      <SortBtns brandStore={brandStore} />
      <div id="brands-wrapper">
        { brandStore.isSortedAZ? <BrandsAZ brandsAZ={brandStore} />
        : brandStore.isSortedZA? <BrandsZA brandsZA={brandStore} />
        : <CurrentBrands currentStore={brandStore} />
        }
      </div>
      <Pagination
        allBrands={brandStore.allBrands.length}
        brandsPerPage={brandStore.brandsPerPage}
        setBrandPage={setBrandPage}
      />
    </>
  )
})

const CurrentBrands = observer(({ currentStore }) => {
  return (
    (typeof currentStore.currentBrands === "undefined")? (
      <p><b>Loading data</b></p>
    ) : (
      currentStore.currentBrands.map((obj, i) => {
        return (
          <div id="brand-items" key={i}>
            <p id="brand-name">{obj.brandName}</p>
          </div>
        )
      })
    )
  )
})

const BrandsAZ = observer(({ brandsAZ }) => {
  return (
    (typeof brandsAZ.sortedAZ === "undefined")? (
      <p><b>Loading data</b></p>
    ) : (
      brandsAZ.sortedAZ.map((obj, i) => {
        return (
          <div id="brand-items" key={i}>
            <p id="brand-name">{obj.brandName}</p>
          </div>
        )
      })
    )
  )
})

const BrandsZA = observer(({ brandsZA }) => {
  return (
    (typeof brandsZA.sortedZA === "undefined")? (
      <p><b>Loading data</b></p>
    ) : (
      brandsZA.sortedZA.map((obj, i) => {
        return (
          <div id="brand-items" key={i}>
            <p id="brand-name">{obj.brandName}</p>
          </div>
        )
      })
    )
  )
})

export default TVbrands