import React from "react";
import Banner from "./Banner";
import "./Home.css";
import Card from "./Card";

function Home() {
  return (
    <div className="Home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-761805954008968120/original/86340536-df98-457f-995a-5d6cbdf54c8b.jpeg?im_w=720"
          description="Mountain and lake views"
          title="Home in Mansfield"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-870542288862199351/original/a6a8bccc-3546-47ce-83eb-a3c224afc900.jpeg?im_w=720"
          description="Beach and ocean views"
          title="Villa"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-18030387/original/a5e25a73-b040-4c88-9e3e-1ab9c1c7fb66.jpeg?im_w=720"
          description="Mountain views"
          title="Cottege in Kangaroo"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-610486864656300557/original/c7762766-1465-491c-a016-6e69126fedb5.jpeg?im_w=720"
          description="The Bamboo Castle in The Sky"
          title="Kecamatan Sidemen"
          price="$451AUD/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-23047940/original/1f08bef5-a721-4ff6-97f9-b7cd37cbe69a.jpeg?im_w=720"
          description="Swallow Hideaway"
          title="Glenaire"
          price="$266AUD/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-673725983906468572/original/ebffbd1e-73ba-4483-a98e-2ce5eca4a5ea.jpeg?im_w=720"
          description="Modern Country tiny home"
          title="Grattai"
          price="$232AUD/night"
        />
      </div>
    </div>
  );
}

export default Home;
