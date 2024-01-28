import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerWrapper" >
      <Link to='/'><img alt='Logo' title='Logo' style={{height:'60px'}} className='icon' src='https://ik.imagekit.io/tcfp7i31d/logo_with_yp_white_6p2ZETYLi.svg'/></Link>
        <div className="footerSection">
          <h4>Fix Health</h4>
          <ul>
            <li><Link to="#">Product</Link></li>
            <li><Link to="#">Blogs</Link></li>
            <li><Link to="#">Privacy Policy</Link></li>
            <li><Link to="#">Terms & Conditions</Link></li>
          </ul>
        </div>
        
        <div className="footerSection">
          <h4>Company</h4>
          <ul>
            <li><Link to="#">About Us</Link></li>
            <li><Link to="#">Careers</Link></li>
            <li><Link to="#">Contact</Link></li>
          </ul>
        </div>

        <div className="footerSection">
          <h4>Services</h4>
          <ul>
            <li><Link to="#">Knee Pain</Link></li>
            <li><Link to="#">Neck Pain</Link></li>
            <li><Link to="#">Back Pain</Link></li>
            <li><Link to="#">Shoulder Pain</Link></li>
            <li><Link to="#">Ankle and Foot Pain</Link></li>
            <li><Link to="#">All Services</Link></li>
          </ul>
        </div>

        <div className="footerSection">
          <h4>Conditions</h4>
          <ul>
            <li><Link to="#">Spondylosis</Link></li>
            <li><Link to="#">ACL Tear</Link></li>
            <li><Link to="#">Achilles Tendonitis</Link></li>
            <li><Link to="#">Plantar Fasciitis</Link></li>
            <li><Link to="#">All Conditions</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
