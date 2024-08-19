import React from "react";
import "./Footer.css";
import { LuArrowUpRightSquare } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-section">
          <h4>Abstract</h4>
          <ul>
            <li>Branches</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Help Center</li>
            <li>Release Notes</li>
            <li>Status</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Community</h4>
          <ul>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Dribbble</li>
            <li>Podcast</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Legal</li>
          </ul>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "50px",
              marginTop: "10px",
            }}
          >
            <div>
              <h3 style={{ fontSize: "11px" }}>Contact Us</h3>
              <div className="email">info@abstrack.com</div>
            </div>
            <div className="footer-copyright">
              <LuArrowUpRightSquare
                color="black"
                size={18}
                style={{
                  backgroundColor: "white",
                  borderRadius: 5,
                  padding: 2,
                  margin: "0px 0px 10px 0",
                }}
              />
              <div>
                <p>© Copyright 2022 </p>
                <p>Abstract Studio Design, Inc.</p>
                <p>All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
