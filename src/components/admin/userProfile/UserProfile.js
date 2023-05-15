import React, { useContext, useEffect, useState } from "react";
import { useNavigate , useParams } from "react-router-dom";
import "../myProfile/MyProfile.css";
import AuthContext from "../../../context/auth/authContext";
import UserContext from "../../../context/user/userContext";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const UserProfile = () => {
  const authContext = useContext(AuthContext);
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const { loadDashProfile, dashprofile , dashprofileDayPlans , dashprofileEod } =
    userContext;

  const { logged_user, loading, isAuthenticated } = authContext;

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onSearch = (e) => {
    // console.log("search called with val", e.target.value);
  };

  let { id } = useParams();

  useEffect(() => {
    // console.log("use effect runs");
    // console.log("auth value---", isAuthenticated);
    if (!sessionStorage.token) {
      // console.log("not authorised");
      navigate("/admin/login");
    }
    console.log("this is id of DashBoard user--", id);
    loadDashProfile(id);
    // eslint-disable-next-line
  }, [isAuthenticated, navigate ]);

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* {console.log("auth while rendering", isAuthenticated)} */}
      <div className="profile-page-container">
        <div className="profile-container">
          <div>
            <div>
              {console.log("rerender***---- dashboard user", dashprofile)}
              <p>Name: {dashprofile?.name}</p>
              <p>Phone No: {dashprofile?.phone}</p>
              <p>Email Id: {dashprofile?.email}</p>
              <p>Address: {dashprofile?.address}</p>
            </div>
          </div>
        </div>
        <div className="dayplan-eod-cont">
          <div
            style={{ textAlign: "center", padding: "10px" }}
            className="search-box-container"
          >
            <input
              style={{ width: "300px", borderRadius: "10px", padding: "5px" }}
              type="text"
              value=""
              onChange={(e) => onSearch(e)}
            />
          </div>
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <Tabs value={value} onChange={handleChange} centered>
              <Tab label="Day Plans" />
              <Tab label="EODs" />
            </Tabs>
          </Box>
          <div className="dayplan-eod-container">
            {value === 0
              ? dashprofileDayPlans.map((dayplan) => (
                  <Card
                    style={{
                      textAlign: "center",
                      width: "80%",
                      margin: "1rem auto",
                    }}
                    sx={{ minWidth: 275 }}
                    // key={dayplan?._id}
                >
                  {console.log('this is dayplan',dayplan)}
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {dayplan.title}
                      </Typography>
                      <Typography variant="body2">{dayplan.text}</Typography>
                    </CardContent>
                    <CardActions style={{ justifyContent: "space-around" }}>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      ></Typography>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {new Date(dayplan.createdAt).toDateString()}
                      </Typography>
                    </CardActions>
                  </Card>
                ))
              : dashprofileEod.map((eod) => (
                  <Card
                    style={{
                      textAlign: "center",
                      width: "80%",
                      margin: "1rem auto",
                    }}
                    sx={{ minWidth: 275 }}
                    key={eod?._id}
                >
                  {console.log('this is eod',eod)}
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {eod?.title}
                      </Typography>
                      <Typography variant="body2">{eod?.text}</Typography>
                    </CardContent>
                    <CardActions style={{ justifyContent: "space-around" }}>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      ></Typography>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {new Date(eod?.createdAt).toDateString()}
                      </Typography>
                    </CardActions>
                  </Card>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
