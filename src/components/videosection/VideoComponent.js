import React from "react";
import "./VideoComponent.css";

import ReactPlayer from "react-player";
import video_btn from "../../media/video-btn.png";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const VideoComponent = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div
      data-aos="fade-up"
      style={{ padding: "0px" }}
      className="custom-section-container"
    >
      <div className="video-bg">
        <div className="video-content-cont">
          <div className="video-btn-container" onClick={() => handleOpen()}>
            {/* <BiPlay style={{ fontSize: "90px" }} /> */}
            <img src={video_btn} alt="video section button" />
          </div>
          <div>
            <h1 style={{ color: "white", textAlign: "center", margin: "15px" }}>
              Welcome to the World of <br /> BLUE WHISTLE
            </h1>
          </div>
        </div>
      </div>
      {/* modal code */}
      <Modal
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="video-box">
          <ReactPlayer
            width="100%"
            height="400px"
            controls={true}
            url="https://youtu.be/xW2jV1Z07gU"
          />
        </Box>
      </Modal>
    </div>
  );
};

export default VideoComponent;
