// pages/About.jsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import group from "./images/image copy 2.png";
import Button from "./Button";
import "./about.css";
import star from "./images/image copy.png";

const About = () => {
  return (
    <>
      <div className="container">
        <Header />

        <div className="fullbody">
          <div className="img">
            <img src={group} />
          </div>
          <div className="about">
            <div className="sh">
              <div className="bullet"></div>
              <p>About Us</p>
            </div>
            <h2>
              Passion for Digital
              <br />
              Transformation
            </h2>
            <p className="para">
              Oric at id enim eu pellentesqe habitent. Ut at diam suscipit amet
              id
              <br />
              cursus id blandit.Consectetr maecenas id vivamus intiger intiger
              <br />
              aliquam. Donec amet rhoncus ut trpis massa augue faucibus.
            </p>
            <hr />
            <div className="lineone">
              <p className="logoip">
                Logoipsum
              </p>
              <img src={star} />
              <p className="logoip">
                Logoipsum
              </p>
              <img src={star} />
              <p className="logoip">
                Logoipsum
              </p>
              
            </div>
            <hr />
            <div className="lineone">
              <p className="logoip">
                Logoipsum
              </p>
              <img src={star} />
              <p className="logoip">
                Logoipsum
              </p>
              <img src={star} />
              <p className="logoip">
                Logoipsum
              </p>
              
            </div>
            <hr />

          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
