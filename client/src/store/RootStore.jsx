import { makeAutoObservable, runInAction } from 'mobx';

class RootStore {
    constructor() {
        this.brandStore = new BrandStore(this);
        this.modelStore = new ModelStore(this);
    }
}

class BrandStore {
  dbBrands = [{}]
  sortedAZ = false
  sortedZA = false
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }
  setBrands = apiData => this.dbBrands = apiData;
  getBrands() {
    let url = `/brands?${new URLSearchParams(window.location.search).toString()}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
      runInAction(() => {
        this.setBrands(data);
      });
    });
  }
  get allBrands() {
    return this.dbBrands.filter(obj => obj !== null);
  }
}

class ModelStore {
  dbModels = [{}]
  search = ""
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this)
  }
  setModels = apiData => this.dbModels = apiData;
  getModels() {
    let url = `/models?${new URLSearchParams(window.location.search).toString()}`
    fetch(url)
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
  get searchModels() {
    let regex = new RegExp(this.search, "i");
    return this.allModels.filter(obj => regex.test(obj.model));
  }
}

const rootStore = new RootStore();
export default rootStore;