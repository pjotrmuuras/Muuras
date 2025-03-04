import React, { useEffect, useState } from 'react';
import './hero.scss';
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import { Button } from '../../Button/Button';
import translate from '../../../../i18n/translate';
import videoFile from './backgroundvideo.mp4';  // Import video

export const Hero = () => {
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1500 });
    Aos.refresh({ duration: 1500 });

    // Force video play for iOS and some mobile browsers
    const video = document.querySelector('.hero-video');
    if (video) {
      video.play().catch(error => console.log("Autoplay prevented:", error));
    }
  }, []);

  const handleVideoLoad = () => {
    setIsVideoReady(true);
  };

  return (
    <div className="hero-container">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`hero-video ${isVideoReady ? 'visible' : 'hidden'}`}
        preload="auto"
        onCanPlayThrough={handleVideoLoad}
      >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="text-container">
        <div className="text" data-aos="fade-right">
          <h1>Muuras</h1>
          <h3>{translate('banner.description')}</h3>
        </div>

        <div className="hero-btns">
          <Link to="/contact">
            <Button
              className="btn"
              buttonStyle="btn-primary"
              buttonSize="btn--lge"
            >
              {translate('banner.button1')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
