import React, { useState, useEffect } from 'react';
import './hero.scss';
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import { Button } from '../../Button/Button';
import translate from '../../../../i18n/translate';
import videoFile from './backgroundvideo.mp4';  // Import video

export const Hero = () => {
  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 1500 });
    Aos.refresh({ duration: 1500 });
  }, []);

  return (
    <div className="hero-container">
      {/* Video background */}
      <video autoPlay loop muted className="hero-video" preload="auto">
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="text-container">
        <div className="text" data-aos="fade-right">
          <h1>Muuras</h1>
          <h3>{translate('banner.description')}</h3>
        </div>

        <div
          className="hero-btns"
          onMouseEnter={() => setIsShown(false)}
          onMouseLeave={() => setIsShown(true)}
        >
          <Link to="/contact">
            <Button
              className="btn"
              buttonStyle="btn-primary"
              buttonSize="btn--lge"
            >
              {isShown ? translate('banner.button1') : translate('banner.button2')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
