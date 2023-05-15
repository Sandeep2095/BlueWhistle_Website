import React from "react";
import "./OurLeaders.css";

// import leader_1 from "../../media/1.jpg";
// import leader_2 from "../../media/2.jpg";
// import leader_3 from "../../media/3.jpg";
// import leader_4 from "../../media/4.jpg";

const OurLeaders = () => {
  return (
    <div
      style={{ border: "2px solid white", padding: "5rem 2rem 4rem" }}
      className="custom-section-container"
    >
      <div className="leaders-section-container">
        <div className="leaders-content">
          <div
            style={{
              position: "relative",
              width: "fit-content",
              margin: "auto",
            }}
          >
            <h1
              style={{
                width: "fit-content",
                position: "relative",
              }}
              className="custom-section-heading"
            >
              OUR TEAM
            </h1>
            <div className="our-brands-heading">
              <div className="red-horizontal-line"></div>
              <p
                style={{
                  marginLeft: "10px",
                  fontWeight: "bolder",
                  color: "white",
                }}
              >
                People
              </p>
            </div>
          </div>
          <p style={{ color: "white" }} className="brands-para">
            Our passion for creating compelling content motivates us and brings
            us together. Learn more about our key people who create this content
            and lead by example.
          </p>
        </div>
        <ul className="leaders-img-grid-container">
          <div className="lead-img-1-cont">
            <div className="infocardContainer">
              <div className="lead-img"></div>
              <div className="textbois">
                <h6>Abhijeet Gautam</h6>
                <p>Creative Coordinator</p>
                {/* <a href="mailto:limecicila@gmail.com">limecicila@gmail.com</a> */}
              </div>
            </div>
          </div>
          <div className="lead-img-2-cont">
            <div className="infocardContainer">
              <div className="lead-img"></div>
              <div className="textbois">
                <h6>Prince Sarraf</h6>
                <p>Administrator Head</p>
                {/* <a href="mailto:limecicila@gmail.com">limecicila@gmail.com</a> */}
              </div>
            </div>
          </div>
          <div className="lead-img-3-cont">
            <div className="infocardContainer">
              <div className="lead-img"></div>
              <div className="textbois">
                <h6>Abhinay Gautam</h6>
                <p>Business Associate- Operations & Growth</p>
                {/* <a href="mailto:limecicila@gmail.com">limecicila@gmail.com</a> */}
              </div>
            </div>
          </div>
          <div className="lead-img-4-cont">
            <div className="infocardContainer">
              <div className="lead-img"></div>
              <div className="textbois">
                <h6>Fatma Rahman</h6>
                <p>Content Head</p>
                {/* <a href="mailto:limecicila@gmail.com">limecicila@gmail.com</a> */}
              </div>
            </div>
          </div>
        </ul>
        <div className="mobile-team-grid">
          <div>
            <div className="mobile-team-grid-name">
              <p>Abhijeet Gautam</p>
              <p>Creative Coordinator</p>
            </div>
          </div>
          <div>
            <div className="mobile-team-grid-name">
              <p>Prince Sarraf</p>
              <p>Administrator Head</p>
            </div>
          </div>
          <div>
            <div className="mobile-team-grid-name">
              <p>Abhinay Gautam</p>
              <p>Business Associate- Operations & Growth</p>
            </div>
          </div>
          <div>
            <div className="mobile-team-grid-name">
              <p>Fatma Rahman</p>
              <p>Content Head</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLeaders;
