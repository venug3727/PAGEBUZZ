import React from "react";
import Header from "./Header";
import Footer from ".//Footer";
import "./stats.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import photo from "./images/image copy 3.png";
const Stats = () => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="stats">
          <h1>Buzz Stats.</h1>
          <div className="stats-box">
            <div className="box">
              <h2>1,200+</h2>
              <h3>Happy Clients</h3>
              <p>
                Number of satisfied clients who have <br />
                benefited from our services.
              </p>
            </div>
            <div className="box">
              <h2>850+</h2>
              <h3>Projects Completed</h3>
              <p>
                Total projects successfully deliverd across
                <br />
                various industries.
              </p>
            </div>
            <div className="box">
              <h2>1,500+</h2>
              <h3>Campaigns Launched</h3>
              <p>
                Successful marketing campaigns lanched,
                <br />
                driving growth and engagement
              </p>
            </div>
          </div>
        </div>
        <div className="eats">
          <div className="pa">
            <p className="headi">FreshEats</p>
            <p className="co">
              Orci at id enim eu pellentesque habitant. Ut at diam suscipit amet
              id
              <br /> cursus id blandit. Consectetur maecenas id vivamus integer
              integer
              <br /> aliquam. Donec amet rhoncus ut turpis massa augue faucibus.
            </p>
            <div className="butt">
              <div className="social">
                <p>#SocialMedia</p>
              </div>
              <div className="social">
                <p>#DigitalMarketing</p>
              </div>
              <div className="social">
                <p>#FreshEats</p>
              </div>
            </div>
            <FontAwesomeIcon className="arr" icon={faArrowRight} />
          </div>
          <div className="photo">
            <img src={photo} alt="" />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Stats;
