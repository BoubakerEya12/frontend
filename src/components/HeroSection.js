import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/video/video-2.mp4' autoPlay loop muted />
      <h1>LINKING AI PLATFORMS</h1>
      <p>Unleash the power of collaboration!</p>
      <div className='hero-btns'>
        <Button
          to="/Sign-up"
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET START
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
