// Footer.jsx
import React from "react";
import "./Footer.css"; // Assuming you have a CSS file for styling the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="logo"> PAGEBUZZ</p>
        <div className="footer-links">
          <p>
            Orci at id eu pellentesque habitant. Ut at diam suscipit amet id cursus id blandit.<br />
            Consectetur maecenas id vivamus integer intiger aliquam.
          </p>
        </div>
        <div className="footer-social">
          {/* Add your social media links here */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance
          </a>
        </div>
        <div className="copy">
          <hr />
          <p>Copyright &copy; {new Date().getFullYear()}  PageBuzz<br />
          Design by TokoTema</p>
          <hr />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
