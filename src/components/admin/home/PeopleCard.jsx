import React from "react";
import "./Home.css";

import { AiOutlinePlusCircle } from "react-icons/ai";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const PeopleCard = () => {
  const [open, setOpen] = React.useState(false);
  let selectedPeople = [];
  let selectedProjects = [];
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const emails = [
    { email: "skumar@bluewhistle.co.in", id: 1 },
    { email: "sandeep@bluewhistle.co.in", id: 2 },
    { email: "tasneem@bluewhistle.co.in", id: 3 },
    { email: "fourth@bluewhistle.co.in", id: 4 },
    { email: "five@bluewhistle.co.in", id: 5 },
    { email: "random@bluewhistle.co.in", id: 6 },
    { email: "unknown@bluewhistle.co.in", id: 7 },
  ];

  const projects = [
    { email: "first project", id: 1 },
    { email: "blue whistle frontend", id: 2 },
    { email: "blue whistle backend", id: 3 },
    { email: "red whistle frontend", id: 4 },
    { email: "random project", id: 5 },
    { email: "unknown project", id: 6 },
    { email: "xyzjkl", id: 7 },
  ];

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "0px solid #000",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };

  const onClickSend = () => {
    console.log('send button clicked');
    console.log('people ', selectedPeople);
    console.log('projects ', selectedProjects);
    selectedPeople = [];
    selectedProjects = [];
    handleClose()
  }

  return (
    <>
      <div style={{ backgroundColor: "#fff!important" }} className="card">
        <div class="card-header">People</div>
        <div class="card-body">
          <h4 class="card-title">
            <button
              onClick={handleOpen}
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              <AiOutlinePlusCircle /> Invite
            </button>
          </h4>
          <div>
            {/* projects */}
            <div className="home-people-card-item">
              <Avatar
                alt="Remy Sharp"
                src="../../../../media/4.jpg"
                style={{ marginRight: "15px" }}
                sx={{ width: 40, height: 40 }}
              />
              <p>team member name </p>
            </div>
            <div className="home-people-card-item">
              <Avatar
                alt="Remy Sharp"
                src="../../../../media/4.jpg"
                style={{ marginRight: "15px" }}
                sx={{ width: 40, height: 40 }}
              />
              <p>team member name</p>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h6">
            Invite People to my Workspace
          </Typography>
          <p>
            Your teammates will get an email that gives them access to your
            team.
          </p>

          <Stack style={{ marginTop: "3rem" }} spacing={3} sx={{ width: 500 }}>
            <Autocomplete
              multiple
              id="tags-outlined"
              onChange={(event, value) => {
                console.log(value)
                selectedPeople = []
                selectedPeople.push(...value)
              }}
              options={emails}
              getOptionLabel={(option) => option.email}
              defaultValue={[]}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Email addresses"
                  placeholder="Select People"
                />
              )}
            />
          </Stack>

          <Stack style={{ marginTop: "3rem" }} spacing={3} sx={{ width: 500 }}>
            <Autocomplete
              multiple
              id="tags-outlined"
              onChange={(event, value) => {
                console.log(value)
                selectedProjects=[]
                selectedProjects.push(...value)
              }}
              options={projects}
              getOptionLabel={(option) => option.email}
              defaultValue={[]}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField {...params} label="Add to Projects" placeholder="" />
              )}
            />
          </Stack>
          <div style={{ marginTop: "2rem" }}>
            <Button onClick={onClickSend} variant="contained">
              Send
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default PeopleCard;
