import React from 'react';
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const navigateBrands = () => {
    navigate("/brands");
  }
  const navigateModels = () => {
    navigate("/models");
  }
  return (
    <div id="main-wrapper">
        <h1 id="tv-h1">TVs</h1>
        <div id="browse-main-wrapper">
            <div className="browse-wrapper">
                <h2 className="browse-h2">Browse by brand</h2>
                <img className="home-img" src={require("../assets/tv1.png")} alt="TV" />
                <button onClick={navigateBrands} className="tv-btn">Browse</button>
            </div>
            <div className="browse-wrapper">
                <h2 className="browse-h2">Browse by model</h2>
                <img className="home-img" src={require("../assets/tv2.png")} alt="TV" />
                <button onClick={navigateModels} className="tv-btn">Browse</button>
            </div>
        </div>
    </div>
  )
}

export default Home