import React from "react";
import "./Footer.css";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <div className="custom-section-container custom-nav">
      <div className="container text-white p-4">
        <div className="row">
          <div className="col-md-3 col-sm-6 lh-lg footer">
            <h3>Write Us At</h3>
            <ul className="list-unstyled m-2">
              <li>
                <i>
                  <EmailRoundedIcon style={{ marginRight: "5px" }} />
                </i>
                <a href="mailto:info@bluewhistle.co.in">
                  info@bluewhistle.co.in
                </a>
              </li>

              <li>
                <i>
                  <EmailRoundedIcon style={{ marginRight: "5px" }} />
                </i>
                <a href="mailto:business@bluewhistle.co.in">
                  business@bluewhistle.co.in
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6 lh-lg footer">
            <h3>Call On</h3>
            <ul className="list-unstyled m-2">
              <li>
                <i>
                  <PhoneRoundedIcon style={{ marginRight: "5px" }} />
                </i>
                <a href="tel:+91906-995-9637">+919069959637</a>
              </li>
              <li>
                <i>
                  <PhoneRoundedIcon style={{ marginRight: "5px" }} />
                </i>
                <a href="tel:	+91912-220-0475">+919122200475</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6 lh-lg footer">
            <h3>Address</h3>
            <ul className="list-unstyled">
              <li className="d-flex m-2">
                <i>
                  <LocationOnRoundedIcon style={{ marginRight: "5px" }} />
                </i>
                <div>
                  Anand Tower, 4A, Exhibition Rd beside Pantaloons, Patna, Bihar
                  800001
                </div>
              </li>
              <li className="d-flex m-2">
                <i>
                  <LanguageRoundedIcon style={{ marginRight: "5px" }} />
                </i>
                <div>India</div>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6 lh-lg footer">
            <h3>Follow Us On</h3>
            <ul className="sci">
              <li className="">
                <a
                  href="https://www.facebook.com/BlueWhistleAdvertising?mibextid=ZbWKwL"
                  target="blank"
                >
                  <FacebookIcon style={{ width: "30px", height: "30px" }} />{" "}
                  Facebook
                </a>
              </li>
              <li className="">
                <a
                  href="https://instagram.com/bluewhistleadvertising?igshid=YmMyMTA2M2Y="
                  target="blank"
                >
                  <InstagramIcon style={{ width: "30px", height: "30px" }} />{" "}
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://wa.me/+919069959637" target="blank">
                  <WhatsAppIcon style={{ width: "30px", height: "30px" }} />{" "}
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/blue-whistle-advertising/"
                  target="blank"
                >
                  <LinkedInIcon style={{ width: "30px", height: "30px" }} />{" "}
                  LinkeDin
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/BlueWhistleAdv2?t=VyS73bXANRPPT4pBFunOYQ&s=09"
                  target="blank"
                >
                  <TwitterIcon style={{ width: "30px", height: "30px" }} />{" "}
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="text-white" />
        <h6 className="text-white font-monospace">@ CopyRight Blue Whistle</h6>
      </div>
    </div>
  );
};

export default Footer;
