import React from "react";
import "./style.scss";
import PostRequest from "./PostRequest";
import Ads from "./Ads";
import Scroll from "./Scroll";
const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <PostRequest />
        <Ads />
      </div>
      <div className="services">
        <Scroll title="Continue browsing" />
        <Scroll title="Most popular Gigs in Logo Design " />
        <Scroll title="Gigs you may like  " />
        <Scroll title="Beautiful Logo Design deliveries, handpicked for you  " />
        <Scroll title="Verified Pro services in Logo Design  " />
      </div>
    </div>
  );
};

export default Home;
