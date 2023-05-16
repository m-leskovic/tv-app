import Footer from "./common/Footer";
import Header from "./pages/home/Header";
import Home from "./pages/home/Home";
import rootStore from "./store/RootStore";
import TVbrands from "./pages/brands/TVbrands";
import TVmodels from "./pages/models/TVmodels";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div id="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/brands"
          element={<TVbrands brandStore={rootStore.brandStore} />}
        />
        <Route
          path="/models"
          element={<TVmodels modelStore={rootStore.modelStore} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
