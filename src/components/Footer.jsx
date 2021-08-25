import { NavLink } from "react-router-dom";
import Contact from "./Contact";
import linked from "../assets/footer/in.png";
import facebook from "../assets/footer/facebook.png";
import insta from "../assets/footer/insta.png";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className='footer-main'>
        <div className='logo-container'>
          <img src={linked} className='footer-logo' alt='linkeldin-logo' />
          <img src={insta} className='footer-logo' alt='insta-logo' />
          <img src={facebook} className='footer-logo' alt='facebook-logo' />
        </div>
        <NavLink className='footer-link' to='/contact'>
          Contact-us
        </NavLink>
      </div>
    </>
  );
};

export default Footer;
