import { makeAutoObservable, runInAction } from 'mobx';
import ApiRequest from './ApiRequest';

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
  brandsCount = null
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }
  setBrands = apiData => this.dbBrands = apiData;
  getBrands() {
    let url = `/brands?${new URLSearchParams(window.location.search).toString()}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      runInAction(() => {
        this.setBrands(data);
      });
    });
  }
  setBrandsCount = apiData => this.brandsCount = apiData;
  getBrandsCount() {
    let url = `/brands/count`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      runInAction(() => {
        this.setBrandsCount(data);
      });
    });
  }
}

class ModelStore {
  dbModels = [{}]
  createModel = {
    model: "",
    screenSizeInch: "",
    screenRange: "",
    resolution: ["1920 x 1080", "3840 x 2160", "7680 x 4320",],
    technology: ["LED", "QLED", "OLED",],
    refreshRate: ["50Hz", "60Hz", "120Hz",]
  }
  editModel = {
    model: "",
    screenSizeInch: "",
    resolution: "",
    technology: "",
    refreshRate: ""
  }
  editId = null
  search = ""
  showCreateModal = false
  showDeleteModal = false
  deleteModelName = ""
  deleteModelId = null
  modelsCount = null
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this)
  }
  setModels = apiData => this.dbModels = apiData;
  getModels() {
    let url = `/models?${new URLSearchParams(window.location.search).toString()}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      runInAction(() => {
        this.setModels(data);
      });
    });
  }
  setModelsCount = apiData => this.modelsCount = apiData;
  getModelsCount() {
    let url = `/models/count`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      runInAction(() => {
        this.setModelsCount(data);
      });
    });
  }
  get searchModels() {
    let regex = new RegExp(this.search, "i");
    return this.dbModels.filter(obj => regex.test(obj.model));
  }
  handleCreate = async (models) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(models)
    }
    const response = await ApiRequest("/models", options);
    return response;
  }
  handleUpdate = async (id, model) => {
    const options = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(model)
    }
    const response = await ApiRequest(`/models/${id}`, options);
    return response;
  }
  handleDelete = async (id) => {
    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    }
    const response = await ApiRequest(`/models/${id}`, options);
    return response;
  }
}

const rootStore = new RootStore();
export default rootStore;