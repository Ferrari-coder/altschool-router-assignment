import React from "react";
import bgimage from "../media/schedule-bg.jpg";

const Home = () => {
  return (
    <div className="home">
      {/* <!-- hero part begins --> */}
      <img src={bgimage} id="bg-video" alt="bg"/>

      <div className="caption">
        <h6>work harder, get stronger</h6>
        <h2>
          easy with our <em>gym</em>
        </h2>
        <div className="main-button scroll-to-section">
          <a href="#">
            <button className="btn show">BECOME A MEMBER</button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Home;
