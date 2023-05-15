import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MyProfile.css";
import AuthContext from "../../../context/auth/authContext";
import UserContext from "../../../context/user/userContext";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Modal from "@mui/material/Modal";

import TextareaAutosize from "@mui/material/TextareaAutosize";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const MyProfile = () => {
  const authContext = useContext(AuthContext);
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const { getDayPlans, dayplans, createDayPlan, createEod, getEod, eods } =
    userContext;
  
  const { logged_user , loadUser , loading, isAuthenticated } = authContext;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isCreateDayPlan, setCreateDayPlan] = useState(false);
  
  const [text, setText] = useState("");
  const [dayplanEodText, setdayplanEodText] = useState("");
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onSearch = (e) => {
    // console.log("search called with val", e.target.value);
  };

  const onChangeHandle = (e) => {
    setdayplanEodText(e.target.value);
    // console.log(dayplanEodText, "dayplan msg value");
  };

  const onCreateDayPlan = () => {
    handleOpen();
    setCreateDayPlan(true);
    // console.log("day plan clicked");
  };

  const onCreateEod = () => {
    handleOpen();
    setCreateDayPlan(false);
    // console.log("eod clicked");
  };

  const onSubmitDayPlanEod = () => {
    if (dayplanEodText === "") {
      alert("Please Enter a valid text");
    } else {
      if (isCreateDayPlan) {
        createDayPlan(dayplanEodText);
        handleClose();
      } else {
        createEod(dayplanEodText);
      }
      setdayplanEodText("");
    }
  };

  useEffect(() => {
    // console.log("use effect runs");
    // console.log('auth value---',isAuthenticated)
    if (!sessionStorage.token) {
      // console.log("not authorised");
      navigate("/admin/login");
    }
    loadUser();
    getDayPlans();
    getEod();
    // eslint-disable-next-line
  }, [isAuthenticated , navigate]);

  return (
    <div style={{ minHeight: "100vh" }}>
      {console.log('auth while rendering', isAuthenticated)}
      <div className="profile-page-container">
        <div className="profile-container">
          <div>
            <div>
              {console.log('profile comp rerender***---- logged user',logged_user)}
              <p>Name: {logged_user?.name}</p>
              <p>Phone No: {logged_user?.phone}</p>
              <p>Email Id: {logged_user?.email}</p>
              <p>
                Address:{" "}
                {logged_user?.address}
              </p>
            </div>
            <div className="button-cont">
              <Button style={{ background: "black" }} onClick={onCreateDayPlan}>
                Create Dayplan
              </Button>
              <Button style={{ background: "black" }} onClick={onCreateEod}>
                Create Eod
              </Button>
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                style={{
                  textAlign: "center",
                  borderRadius: "10px",
                  border: "none",
                }}
                sx={style}
              >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Create {isCreateDayPlan ? "Day Plan" : "Eod"}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <TextareaAutosize
                    style={{
                      borderRadius: "10px",
                      padding: "10px",
                      width: 300,
                      whiteSpace: 'pre-wrap',
                      whiteSpace:'-moz-pre-wrap',
                    }}
                    className="dayplan-eod-text"
                    aria-label="minimum height"
                    minRows={5}
                    placeholder="Please Enter some value"
                    value={dayplanEodText}
                    onChange={(e) => onChangeHandle(e)}
                  />
                </Typography>
                <Button onClick={onSubmitDayPlanEod}>
                  Submit {isCreateDayPlan ? "Day Plan" : "Eod"}
                </Button>
              </Box>
            </Modal>
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
              ? dayplans.map((dayplan) => (
                  <Card
                    style={{
                      textAlign: "center",
                      width: "80%",
                      margin: "1rem auto",
                    }}
                    sx={{ minWidth: 275 }}
                    key={dayplan._id}
                  >
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
              : eods.map((eod) => (
                  <Card
                    style={{
                      textAlign: "center",
                      width: "80%",
                      margin: "1rem auto",
                    }}
                    sx={{ minWidth: 275 }}
                    key={eod._id}
                  >
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {eod.title}
                      </Typography>
                      <Typography variant="body2">{eod.text}</Typography>
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
                        {new Date(eod.createdAt).toDateString()}
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

export default MyProfile;
