import React, { useState } from "react";
import "./Banner.css";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </button>
      </div>
      <div className="banner__info">
        <h1>Start your new journey here</h1>
        <h4>Start from booking from Airbrb NOW</h4>
        <button onClick={() => navigate("/search")}>Explore Nearby</button>
      </div>
    </div>
  );
}

export default Banner;
