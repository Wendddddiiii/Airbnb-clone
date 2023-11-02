import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>78 Stays * 26th Aug to 30th Aug * 2 guests</p>
        <h1>Stays Nearby</h1>
        <button>Cancellation Flexibility</button>
        <button>Property Type</button>
        <button>Price</button>
        <button>Number of beds</button>
        <button>Number of bathrooms</button>
        <button>SVG Rating</button>
        <button>Number of total reviews</button>
      </div>
      <SearchResult
        img="https://a0.muscache.com/im/pictures/1f18ae8a-235c-47fb-941e-0b658bfde7aa.jpg?im_w=720"
        location="Near KooKaburra"
        title="Petticoat Creek"
        description="1 guest * 1 bedroom * 1 queen bed"
        ratings={4.55}
        price="$550AUD/night"
        total="$4450 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/4ab95ee7-3339-4333-8f89-a7157047d9bf.jpg?im_w=720"
        location="Near 101 Love Shack"
        title="Earthen home in Great Western"
        description="1 guest * 1 bedroom * 1 double bed"
        ratings={4.83}
        price="$350AUD/night"
        total="$3250 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/prohost-api/Hosting-899532807835270383/original/71d72176-5d24-4547-afd5-ef4f7dc5e55c.jpeg?im_w=720"
        location="Near Marrowbone"
        title="Home in Pokolbin"
        description="4 guest * 3 bedroom * 3 double bed"
        ratings={4.23}
        price="$1318AUD/night"
        total="$2700 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-49840100/original/f7d61fa4-cece-428b-bda2-58526caf3b14.jpeg?im_w=720"
        location="Near Felons Corner"
        title="Cabin in Sheffield"
        description="1 guest * 1 bedroom * 2 beds"
        ratings={4.97}
        price="$509AUD/night"
        total="$3280 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-36846890/original/aad3692a-6626-436d-95d0-4a48190259ea.jpeg?im_w=720"
        location="Near Paringa Estate"
        title="Cabin in Red Hill South"
        description="1 guest * 1 bedroom * 1 king bed"
        ratings={4.98}
        price="$402AUD/night"
        total="$3290 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/91570f80-ef9f-4eb5-9b81-7239c98766e8.jpg?im_w=720"
        location="Near TerraWarra Estate"
        title="Tiny Home"
        description="1 guest * 1 bedroom * 2 beds"
        ratings={4.97}
        price="$300AUD/night"
        total="$1500 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/bf4b6fa0-5511-484b-8515-20d733927cd0.jpg?im_w=720"
        location="Near Strzelecki"
        title="Farm stay"
        description="5 guest * 4 bedroom * 4 beds"
        ratings={4.93}
        price="$370AUD/night"
        total="$2280 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-42363473/original/39aa83ae-656e-4995-b2f9-72f7f2985e0f.jpeg?im_w=720"
        location="Near Coach Light Cabin"
        title="Tiny Home in Aldinga"
        description="1 guest * 1 bedroom * 1 queen bed"
        ratings={4.86}
        price="$346AUD/night"
        total="$3240 total"
      />
    </div>
  );
}

export default SearchPage;
