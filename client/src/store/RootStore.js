import { makeAutoObservable, runInAction } from 'mobx';

class RootStore {
    constructor() {
        this.brandStore = new BrandStore(this);
        this.modelStore = new ModelStore(this);
    }
}

class BrandStore {
  dbBrands = [{}];
  isSortedAZ = false
  isSortedZA = false
  currentPage = 1;
  brandsPerPage = 5;
  indexLastBrand = this.currentPage * this.brandsPerPage;
  indexFirstBrand = this.indexLastBrand - this.brandsPerPage;
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }
  setBrands = apiData => this.dbBrands = apiData;
  getBrands() {
    fetch("/brands")
    .then(response => response.json())
    .then(data => {
      runInAction(() => {
        this.setBrands(data);
      });
    });
  }
  get allBrands() {
    return this.dbBrands.filter(brand => brand !== null);
  }
  get currentBrands() {
    return this.allBrands.slice(this.indexFirstBrand, this.indexLastBrand);
  }
  get sortedAZ() {
    return this.allBrands.sort((a, b) => (a.brandName > b.brandName)? 1: -1)
      .slice(this.indexFirstBrand, this.indexLastBrand);
  }
  get sortedZA() {
    return this.allBrands.sort((b, a) => (b.brandName > a.brandName)? -1: 1)
      .slice(this.indexFirstBrand, this.indexLastBrand);
  }
  setPage = (pgNum) => {
    this.currentPage = pgNum;
    this.indexLastBrand = this.currentPage * this.brandsPerPage;
    this.indexFirstBrand = this.indexLastBrand - this.brandsPerPage;
  }
}

class ModelStore {
  dbModels = [{}]
  search = ""
  resArr = []
  currentPage = 1;
  modelsPerPage = 10;
  indexLastModel = this.currentPage * this.modelsPerPage;
  indexFirstModel = this.indexLastModel - this.modelsPerPage;
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this)
  }
  setModels = apiData => {
    this.dbModels = apiData;
  }
  getModels() {
    fetch("/models")
    .then(response => response.json())
    .then(data => {
      runInAction(() => {
        this.setModels(data);
      });
    });
  }
  get allModels() {
    return this.dbModels.filter(obj => obj !== null);
  }
  get currentModels() {
    return this.allModels.slice(this.indexFirstModel, this.indexLastModel);
  }
  get searchModels() {
    const regex = new RegExp(this.search, "i");
    return this.allModels.filter(obj => regex.test(obj.model))
      .slice(this.indexFirstModel, this.indexLastModel);
  }
  setPage(pgNum) {
    this.currentPage = pgNum;
    this.indexLastModel = this.currentPage * this.modelsPerPage;
    this.indexFirstModel = this.indexLastModel - this.modelsPerPage;
  }
}

const rootStore = new RootStore();
export default rootStore;
