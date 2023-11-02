import React from "react";
import "./SearchResult.css";

function SearchResult({
  img,
  location,
  title,
  description,
  ratings,
  price,
  total,
}) {
  return (
    <div className="searchResult">
      <img src={img} alt="" />
      <div className="searchResult__heart">&#x2661;</div>
      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>
        <div className="searchResult__infoBottom">
          <div className="searchResult__ratings">
            <div className="searchResult__star">&#x2B50;</div>
            <p>{ratings}</p>
          </div>
          <div className="searchResult__price">
            <p>{price}</p>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
