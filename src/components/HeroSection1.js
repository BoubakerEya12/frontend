import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection1.css';
import { Link } from 'react-router-dom';


function HeroSection1() {
  return (
    <div className='hero-container'>
    <video src='/video/video-1.mp4' autoPlay loop muted />
    <h1>OUR SERVICES</h1>
    <div className='hero-btns'>
      <Link to="/BrandGenerator">
        <Button
        to="/BrandGenerator"
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          BRAND GENERATOR
        </Button>
      </Link>
      <Link to="/voice-generator">
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Grammar corrector and voice generator
      </Button>
      </Link>
      <Button
        className='btns'
        buttonStyle='btn--primary'
        buttonSize='btn--large'
      >
        ?????????????????? 
      </Button>
    </div>
  </div>
);
}

export default HeroSection1
