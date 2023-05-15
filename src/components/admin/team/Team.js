import React from 'react';
import './Team.css';

const Team = () => {
  return (
    <>
      <div>Teams</div>
      <div>
        <div className="admin-teampage-container">
          <div>
            <h5 className="line-through-head">
              <span className="line-throught-span">Web Development Team</span>
            </h5>
            <p className="key-team-card">
              Creation Date:{" "}
              <span className="value-team-card">19 Jan 2023</span>
            </p>
            <p className="key-team-card">
              No of Members:<span className="value-team-card"> 09</span>
            </p>
          </div>

          <div>
            <h5 className="line-through-head">
              <span className="line-throught-span">Content Team</span>{" "}
            </h5>
            <p className="key-team-card">
              Creation Date:{" "}
              <span className="value-team-card">19 Jan 2023</span>
            </p>
            <p className="key-team-card">
              No of Members:<span className="value-team-card"> 09</span>
            </p>
          </div>

          <div>
            <h5 className="line-through-head">
              <span className="line-throught-span">Management Team</span>
            </h5>
            <p className="key-team-card">
              Creation Date:{" "}
              <span className="value-team-card">19 Jan 2023</span>
            </p>
            <p className="key-team-card">
              No of Members:<span className="value-team-card"> 09</span>
            </p>
          </div>

          <div>
            <h5 className="line-through-head">
              <span className="line-throught-span">Graphic Designing Team</span>
            </h5>
            <p className="key-team-card">
              Creation Date:{" "}
              <span className="value-team-card">19 Jan 2023</span>
            </p>
            <p className="key-team-card">
              No of Members:<span className="value-team-card"> 09</span>
            </p>
          </div>

          <div>
            <h5 className="line-through-head">
              <span className="line-throught-span">Copywriter Team</span>
            </h5>
            <p className="key-team-card">
              Creation Date:{" "}
              <span className="value-team-card">19 Jan 2023</span>
            </p>
            <p className="key-team-card">
              No of Members:<span className="value-team-card"> 09</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team