import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

const Pagination = observer(({ brandStore, modelStore }) => {
  return (
    <div id="page-wrapper">
      {window.location.pathname === "/brands" ? (
        <BrandPages brandStore={brandStore} />
      ) : window.location.pathname === "/models" ? (
        <ModelPages modelStore={modelStore} />
      ) : null}
    </div>
  );
});

const BrandPages = observer(({ brandStore }) => {
  useEffect(() => {
    brandStore.getBrandsCount();
  });

  let count = brandStore.brandsCount;
  let brandsPerPage = 5;
  let brandPages = [];

  for (let i = 1; i <= count / brandsPerPage; i++) {
    brandPages.push(i);
  }
  return (
    <>
      {brandPages.map((num) => {
        return (
          <div key={num}>
            <Link id="page-link" to={`/brands?p=${num}`}>
              {num}
            </Link>
          </div>
        );
      })}
    </>
  );
});

const ModelPages = observer(({ modelStore }) => {
  useEffect(() => {
    modelStore.getModelsCount();
  });

  let count = modelStore.modelsCount;
  let modelsPerPage = 10;
  let modelPages = [];

  for (let i = 1; i <= Math.ceil(count / modelsPerPage); i++) {
    modelPages.push(i);
  }
  return (
    <>
      {modelPages.map((num) => {
        return (
          <div key={num}>
            <Link id="page-link" to={`/models?p=${num}`}>
              {num}
            </Link>
          </div>
        );
      })}
    </>
  );
});

export default Pagination;
