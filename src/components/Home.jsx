// pages/Home.jsx
import React from "react";
import Header from "./Header";
import Footer from ".//Footer";
import Button from "./Button";
import gr from "./images/image.png";
import play from "./images/play-button.png";
import star from "./images/image copy.png";
import "./home.css";
const Home = () => {
  return (
    <div className="full">
      
      <div className="container">
      <Header />
        <div className="cont">
          <div className="content">
            <div className="sh">
              <div className="bullet"></div>
              <p>PageBuzz</p>
            </div>
            <p className="heading">
              Unlock Your Brand's
              <br />
              Potentioal Online
            </p>
            <p className="con">
              Viverra enim donec sed commodo sagittis facilisis donec elit
              pulvinar. Phasellus morbi vitae aliquet gravida luctus id
              dictumst. Cursus est at amet sed facilisi. Cursus ut pulvinar in
              tempus. Interdum velit odio fermentum semper penatibus nunc.
            </p>
            <Button variant="primary" size="medium">
              <a href="/contact">CONTECT US</a>
            </Button>
          </div>
          <div className="ovel">
            <div className="ov1">
              <img src="https://us.123rf.com/450wm/helgaq/helgaq2305/helgaq230500519/205090084-abstract-illustration-colored-waves-and-fancy-images-wallpaper-poster-art-generated-ai.jpg?ver=6" />
            </div>
            <div className="ov2">
              <div className="ovin">
                <img src={gr} />
              </div>
              <div className="round">
                <img src={play} alt="" />
              </div>
            </div>
            <div className="ov3">
              <p>PROJECTS</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="foot">
          
          <p>Award-Winning strategies</p>
          <img src={star} />
          <p>A1,00+ Successful Campaingns Deliverd</p>
          <img src={star} />
          <p>98% Client Satisfaction Rate</p>
        </div>
        <hr />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
