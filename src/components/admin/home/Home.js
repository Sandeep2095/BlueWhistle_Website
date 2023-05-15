import React from "react";
import "./Home.css";
import ProjectCard from "./ProjectCard";
import PrioritiesCard from "./PrioritiesCard";
import PeopleCard from "./PeopleCard";

const Home = () => {
  return (
    <div style={{ minHeight: "100vh" }} className="">
      <div class="container">
        {/* profile name and time logged details */}
        <div style={{ margn: "auto", textAlign: "center" }}>
          Thursday , January 12
          <br />
          <br />
          Welcome, Sandeep
        </div>
        <div className="row home-time-logged">
          <div style={{ textAlign: "center" }}>
            <span>Time Logged</span>
            <span>Today - {"2 hrs : 30 min"}</span>
            <span>This Week - {"23 hrs : 58 min"} </span>
          </div>
        </div>
        <div class="row">
          <div class="col-sm">
            <PrioritiesCard />
          </div>
          <div class="col-sm">
            <ProjectCard />
          </div>
        </div>

        <div style={{marginTop:"2rem"}} class="row">
          <div class="col-sm">
            <PeopleCard />
          </div>
          <div class="col-sm">
          </div>
        </div>
      </div>
      {/* component to display all cards of the users */}
    </div>
  );
};

export default Home;
