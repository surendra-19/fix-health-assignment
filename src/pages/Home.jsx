import React, { useState, useEffect } from 'react';
import Doctor from '../assets/Doctor.png';
import '../styles/Home.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Questions from '../components/questions';

const Home = () => {
  const [typeEffect] = useTypewriter({
    words: ['virtual visit !'],
    loop: {},
    typeSpeed: 90,
    deleteSpeed: 50,
  });

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const showArrow = scrollY > 200; 

  return (
    <>
      <div className='homeContainer'>
        <div className="homeWrapper">
          <motion.div className="textContainer"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, type: 'tween' }}
          >
            <span style={{ fontSize: '30px', fontWeight: '700' }}>Get expert advice from the comfort of your home</span>
            <br />
            <span>Schedule your <span style={{ color: '#00ACC1', fontWeight: 'bold' }}>{typeEffect}<Cursor /></span></span>
            <br />
            <Link to='/booknow'><button className='booknow'>Book now</button></Link>
          </motion.div>
          <div className="imageContainer">
            <img className='doctor' src={Doctor} alt="Doctor" />
          </div>
        </div>
        <div className="questionsContainer">
          <Questions/>
        </div>
        <div className="footerContainer">
          <Footer />
        </div>

        {showArrow && (
          <div className="arrowIcon" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <KeyboardDoubleArrowUpIcon fontSize="large" />
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
