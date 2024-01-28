import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <motion.div className='navbarContainer'
      initial={{y:-100}}
      animate={{y:0}}
      transition={{delay:0.45, duration:1, type:'spring'}}
    >
      <div className="leftNav">
        <Link to='/'><img alt='Logo' title='Logo' className='icon' src='https://ik.imagekit.io/tcfp7i31d/logo_with_yp_white_6p2ZETYLi.svg'/></Link>
      </div>
      <div className="rightNav">
        <Link to='/'><span >Home</span></Link>
        <Link to='/booknow'><button className='booknow'>Book now</button></Link>
      </div>
    </motion.div>
  );
};

export default Navbar;
