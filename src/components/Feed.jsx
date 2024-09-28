import React from "react";
import Header from "./Header";
import Footer from ".//Footer";
import "./feed.css";
import qu from "./images/quote-left.png";
import me from "./images/image copy 4.png";
import me1 from "./images/image copy 5.png";
import me2 from "./images/image copy 6.png";
import me3 from "./images/image copy 7.png";
function Feed() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="heding">
          <div className="sh">
            <div className="bullet"></div>
            <p>Testimonials</p>
          </div>
          <h1>
            Client Testimonials:Real
            <br />
            Reslt, Real Feedback
          </h1>
          <div className="fed">
            <div className="card">
              <div className="ti">
                <img src={qu} />
                <p>(4.8/5)</p>
              </div>
              <hr />
              <p className="pe">
                "PageBuzz transformed our online store into a sleek,
                user-friendly platform. Our sales skyrocketed by 35% in just
                three months! Their team is professional, creative, and
                incredibly responsive."
              </p>
              <hr />
              <div className="name">
                <div className="na">
                  <p>Willie Gibson</p>
                  <p>CEO of Buzz</p>
                </div>
                <img src={me} alt="" />
              </div>
            </div>
            <div className="card">
              <div className="ti">
                <img src={qu} />
                <p>(4.8/5)</p>
              </div>
              <hr />
              <p className="pe">
                "The SEO strategies implemented by PageBuzz were a game-changer
                for us. We saw a 50% increase in organic traffic and now rank at
                the top of search results. Highly recommend their services!"
              </p>
              <hr />
              <div className="name">
                <div className="na">
                  <p>April Mcdermott</p>
                  <p>CEO of Buzz</p>
                </div>
                <img src={me1} alt="" />
              </div>
            </div>
          </div>
          <div className="fed">
            <div className="card">
              <div className="ti">
                <img src={qu} />
                <p>(4.8/5)</p>
              </div>
              <hr />
              <p className="pe">
                "Our social media engagement went through the roof thanks to
                PageBuzz. Their innovative campaign brought us a 70% rise in
                engagement and a significant boost in online orders."
              </p>
              <hr />
              <div className="name">
                <div className="na">
                  <p>Eric reynolds</p>
                  <p>CEO of Buzz</p>
                </div>
                <img src={me2} alt="" />
              </div>
            </div>
            <div className="card">
              <div className="ti">
                <img src={qu} />
                <p>(4.8/5)</p>
              </div>
              <hr />
              <p className="pe">
                "Working with PageBuzz was a delight. Their content creation
                exceeded our expectations, increasing our website engagement by
                60%. They truly understand our industry and audience."
              </p>
              <hr />
              <div className="name">
                <div className="na">
                  <p>WSpencer Halvorson</p>
                  <p>CEO of Buzz</p>
                </div>
                <img src={me3} alt="" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Feed;
