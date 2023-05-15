import React from "react";
import "./About.css";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
  p: 4,
};

const About = () => {
  const [open, setOpen] = React.useState(false);
  const [obj, setObj] = React.useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    setObj({})
  };

  const cards = [
    {
      heading: "Philosophy",
      text: "If your brand died tomorrow, would anyone come to the funeral? At Blue Whistle, we love helping people fall in love with brands. We’ve been doing it for a long time, and we’ve planted our flag right where data, technology, and creativity converge. Why? Because it’s fun. The world is full of boring marketing that doesn’t make anyone feel anything but that’s what your brand is: A feeling, and we live that feeling. We believe that designs are crafted in a way to tell you different stories. We add a touch of filter to our creativity that is eye-catching with a strategy to block deals for advertising and brand building. With a vision, we add solutions to simplicity and a language that attracts people’s interest.",
    },
    {
      heading: "Culture",
      text: "Creativity speaks for us! We are a bunch of creative animals, all messed up in chaos and ideas that lead to positivity in every way. We love and live brands together to create trends that give us a taste of success and meet unmatched client satisfaction.",
    },
    {
      heading: "Achievement",
      text: "We walked in Patna with no identity and to be honest we don’t have one except our work that is recognized because our creativity speaks for us. Building a clientele of 15+ in a span of three months is what motivates us to work every day.",
    },
  ];

  const onClickCard = (card) => {
    handleOpen();
    setObj(card);
  }

  return (
    <div className="about-page-container">
      <div className="custom-about-container">
        <div>
          <div className="about-us-cont">
            <div className="about-us-text">
              <h2
                style={{ color: "#0e3252", textAlign: "left" }}
                className="custom-section-heading"
              >
                About Us
              </h2>
              <p className="above-para-heading">
                Best Advertising , Innovative Ideas for your
                Business
              </p>
              <p
                style={{
                  color: "#746866",
                  marginTop: "2rem",
                  textAlign: "justify",
                  lineHeight: "30px",
                }}
              >
                Welcome to the world of Whistlers, we hold on to the magic that
                echoes creativity for beautiful brands and bespoke solutions. At
                Blue Whistle, we help people fall in love with brands. We've
                planted our flag right where data, technology, and creativity
                converge. Blue Whistle Advertising is a creative service agency
                delivering a strong branding identity through marketing
                communications across digital media.
              </p>
            </div>
            <div className="about-us-img"></div>
          </div>
        </div>
      </div>

      {/* cards for philosophy ,  */}
      <div className="about-cards-cont">
        <div className="about-cards-grid">
          {cards.map((card, index) => (
            <div className="about-card-item" onClick={() => onClickCard(card)}>
              <h2 style={{ color: "rgb(116 104 102 / 49%)" }}>0{index + 1}</h2>
              <h2
                style={{
                  color: "black",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
              >
                {card.heading}
              </h2>
              <p
                style={{
                  color: "#746866",
                  margin: "30px auto",
                  lineHeight: "30px",
                }}
              >
                {card.text.slice(0, 70) + "..."}
              </p>
              <span className="about-card-line"></span>
            </div>
          ))}
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="card-modal" sx={style}>
          <h2
            style={{ fontWeight: "bolder", marginBottom: "2rem" }}
            id="modal-modal-title"
          >
            {obj?.heading}
          </h2>
          <p
            style={{ color: "rgb(116, 104, 102)", textAlign: "justify" }}
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            {obj?.text}
          </p>
        </Box>
      </Modal>
    </div>
  );
};

export default About;
