import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navigateBrands = () => {
    navigate("/brands");
  }
  const navigateModels = () => {
    navigate("/models");
  }
  return (
    <div id="home-wrapper">
        <h1 id="tv-h1">TVs</h1>
        <div id="browse-main-wrapper">
            <div className="browse-wrapper">
                <h2 className="browse-h2">Browse brands</h2>
                <img className="home-img" src={require("../assets/tv1.png")} alt="TV" />
                <button className="browse-btn" onClick={navigateBrands}>Browse</button>
            </div>
            <div className="browse-wrapper">
                <h2 className="browse-h2">Browse models</h2>
                <img className="home-img" src={require("../assets/tv2.png")} alt="TV" />
                <button className="browse-btn" onClick={navigateModels}>Browse</button>
            </div>
        </div>
    </div>
  )
}

export default Home