// pages/Contact.jsx
import React from "react";
import Header from "./Header";
import Footer from ".//Footer";
import "./contact.css";
const Contact = () => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="contn">
          <div className="titl">
            <div className="bullet"></div>
            <p>Available For new Projects</p>
            <div className="bullet"></div>
          </div>
          <h1>Interested in Working<br />Together?</h1>
          <p className="ppp">
            Oric at id enim eu pellentesque habitentes. Ut at diam suscipit amet id cursus id blandit.<br />
            Consectettur maecenas id vivamus intiger intiger aliquam.
          </p>
          <div className="b">
            <p>SCHEDULE A CALL</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
