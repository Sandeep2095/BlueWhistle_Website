import React from "react";
import "./Home.css";
import Avatar from "@mui/material/Avatar";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import { AiOutlineCheckCircle } from 'react-icons/ai';

const PrioritiesCard = () => {
  const [value, setValue] = React.useState(0);
  const [upcomingTasks, setUpcomingTasks] = React.useState([
    {
      name: "first task",
      due_date: "19 Jan 2023",
    },
    {
      name: "second task",
      due_date: "19 Jan 2023",
    },
    {
      name: "third task",
      due_date: "19 Jan 2023",
    },
  ]);
  const upcoming_Tasks_Fragment = (
    <>
      <p>Tasks whose start dates have not arrived</p>
      {upcomingTasks.map((task) => (
        <div id="home_tab_upcoming_task">
          <div style={{ fontSize: "13px" }}>
            <span style={{ marginRight: "5px" }}>
              <AiOutlineCheckCircle />
            </span>
            {task.name}
          </div>
          <div style={{ fontSize: "13px" }}>{task.due_date}</div>
        </div>
      ))}
    </>
  );
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div style={{ backgroundColor: "#fff!important" }} className="card">
        <div
          style={{ display: "flex", alignItems: "center" }}
          className="card-header"
        >
          <Avatar
            alt="Remy Sharp"
            src="../../../../media/4.jpg"
            style={{ marginRight: "15px" }}
            sx={{ width: 40, height: 40 }}
          />
          <div>
            <h6>My Priorities</h6>
          </div>
        </div>
        <div className="card-body">
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <Tabs value={value} onChange={handleChange} centered>
              <Tab style={{ fontSize: "12px" }} label="Upcoming" />
              <Tab style={{ fontSize: "12px" }} label="Overdue" />
              <Tab style={{ fontSize: "12px" }} label="Completed" />
            </Tabs>
          </Box>
          <div className="project-tab-container">
            {value === 0
              ? upcoming_Tasks_Fragment
              : value === 1
              ? "Overdue projects or tasks"
              : "completed tasks"}
          </div>
        </div>
      </div>
    </>
  );
};

export default PrioritiesCard;


