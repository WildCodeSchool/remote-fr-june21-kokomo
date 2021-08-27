import { NavLink } from 'react-router-dom';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import linked from '../assets/footer/in.png';
import facebook from '../assets/footer/facebook.png';
import like from '../assets/footer/like.png';
import insta from '../assets/footer/insta.png';

import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-main'>
            <div className='logo-container'>
                <img src={linked} className='footer-logo' alt='linkeldin-logo' />
                <img src={insta} className='footer-logo' alt='insta-logo' />
                <img src={facebook} className='footer-logo' alt='facebook-logo' />
                <img src={like} className='footer-logo' alt='like-logo' />
            </div>
            <NavLink to="/favorites">
                <FontAwesomeIcon  className='footer-heart' icon={ faHeart } size={"2x"} />
            </NavLink>
           <NavLink className='footer-link' to="/contact">Contact us</NavLink>
        </div>
    );
}

export default Footer;
