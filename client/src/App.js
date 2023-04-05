import Header from './components/Header';
import Home from './pages/Home';
import TVbrands from './pages/TVbrands';
import TVmodels from './pages/TVmodels';
import rootStore from './store/RootStore';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div id="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<TVbrands brandStore={rootStore.brandStore} />} />
        <Route path="/models" element={<TVmodels modelStore={rootStore.modelStore} />} />
      </Routes>
    </div>
  );
}

export default App;
