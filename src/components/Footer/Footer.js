import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footerlist-container">
        <ul>
          <p>CONTACT US</p>
          <li>2664445566</li>
          <li>Capital</li>
          <li>San Luis, Argentina</li>
          <li>pabloecarranza@hotmail.com</li>
        </ul>

        <ul>
          <p>SHOP</p>
          <li>
            <Link className="link" to="/category/perfume">
              Perfume
            </Link>
          </li>
          <li>
            <Link className="link" to="/category/creams">
              Creams
            </Link>
          </li>
          <li>
            <Link className="link" to="/category/serums">
              Serums
            </Link>
          </li>
          <li>
            <Link className="link" to="/category/face%20masks">
              Face Masks
            </Link>
          </li>
        </ul>
      </div>

      <div className="footersocial-section">
        <ul>
          <li>
            <TwitterIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <FacebookIcon />
          </li>
        </ul>
      </div>

      <div className="footer-credits">
        <h1>Woman Care</h1>
      </div>
    </footer>
  );
};

export default Footer;
