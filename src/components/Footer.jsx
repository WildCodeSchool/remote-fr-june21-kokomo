import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className='footer-main'>
        <NavLink className='footer-link' to='/contact'>
          Contact-us
        </NavLink>
        <div className='footer-icons'>
          <NavLink className='bookmark-fav' to='/favorites'>
            <FontAwesomeIcon icon={faBookmark} size='2x' />
          </NavLink>
          <a
            href='https://www.facebook.com'
            className='facebook social'
            alt='facebook'
          >
            <FontAwesomeIcon icon={faFacebook} size='2x' />
          </a>
          <a
            href='https://www.instagram.com'
            target='_blank'
            rel='noreferrer'
            className='instagram social'
          >
            <FontAwesomeIcon icon={faInstagram} size='2x' />
          </a>
        </div>
        <a
          href='https://www.instagram.com'
          target='_blank'
          rel='noreferrer'
          className='footer-burger'
        >
          <FontAwesomeIcon icon={faBars} size='2x' />
        </a>
      </div>
    </>
  );
};

export default Footer;
