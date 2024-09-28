// pages/Services.jsx
import React from "react";
import "./services.css";
import Header from "./Header";
import Footer from ".//Footer";
import gr from "./images/image.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Button from "./Button";

const Services = () => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="hed">
          <p className="ph">Our Services</p>
          <div className="ron">
            <p className="see">
              SEE
              <br />
              ALL
            </p>
          </div>
        </div>
        <div className="holl">
          <div className="serv">
            <h2>Website development &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;    <FontAwesomeIcon icon={faArrowRight} /></h2>
            <p className="num">001</p>
          </div>
          <div className="serv">
            <p className="num">002</p>
            <h2>Digital Marketing&nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;     <FontAwesomeIcon icon={faArrowRight} /></h2>
          </div>
          <div className="serv">
            <h2>SEO Optimization&nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  <FontAwesomeIcon icon={faArrowRight} /></h2>
            <p className="num">003</p>
          </div>
          <div className="serv">
            <p className="num">004</p>
            <h2>Social Media Management &nbsp; &nbsp;  &nbsp;   <FontAwesomeIcon icon={faArrowRight} /></h2>
          </div>
        </div>
        <img className="aboutimg" src={gr} />
        <Footer />
      </div>
    </>
  );
};

export default Services;
