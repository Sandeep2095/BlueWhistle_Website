import React from "react";
import "./Home.css";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

const ProjectCard = () => {
  return (
    <>
      <div style={{ backgroundColor: "#fff!important" }} className="card">
        <div class="card-header">Projects</div>
        <div class="card-body">
          <h4 class="card-title">
            <button style={{ backgroundColor: "transparent", border: "none" }}>
              <AiOutlinePlusCircle /> Create Project
            </button>
          </h4>
          <div>
            {/* projects */}
            <div className="home-pro-card-item">
              <p>first project </p>
              <div class="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle dropdown-toggle-no-icon"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BsThreeDotsVertical style={{ color: "#393636" }} />
                </button>
                <ul
                  style={{ transform: "translate(-30px,38px)" }}
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#!">
                      Delete
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Edit
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="home-pro-card-item">
              <p>second project </p>
              <div class="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle dropdown-toggle-no-icon"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BsThreeDotsVertical style={{ color: "#393636" }} />
                </button>
                <ul
                  style={{ transform: "translate(-30px,38px)" }}
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#!">
                      Delete
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Edit
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
