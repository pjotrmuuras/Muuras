import React, {useState, useEffect} from 'react';
// import {AMSData} from './AMSData';
import './ams.scss';
import translate from '../../../../i18n/translate';
// import translate from '../../../i18n/translate';
import {Button} from '../../Button/Button';

export const AMS = () => {
    const [smallScreen, setSmallScreen] = useState(false);

    // const handleClick = () => {setClicked(!clicked)};
    // const closeMenuMobile = () => setClicked(false);


    const isSmallerScreen = () => {
        if(window.innerWidth <= 960) {
            setSmallScreen(true)
        } else {
            setSmallScreen(false)
        }
    }

    useEffect(() => {
        isSmallerScreen();
    }, []);

    window.addEventListener('resize', isSmallerScreen);

    return (
        <div className='ams-container'>
            {smallScreen ? 
            <>
            <div data-aos="fade-right" className='ams-img-container'>
            <img src='./img/canal.png' alt='Circular Cycle'/>
        </div>
        <div data-aos="fade-left" className='ams-text-container'>
            <h2>{translate('AMSData.title')}</h2>
            <h5>{translate('AMSData.date')}</h5>
            <p>{translate('AMSData.description')}</p>
        </div> 
       
        </> : 
         <div data-aos="fade-right" className='ams_large'>
            <img src='./img/canal.png' alt='Circular Cycle'/>
            <div className='ams_large_text'>
                <h2>{translate('AMSData.title')}</h2>
                <h5>{translate('AMSData.date')}</h5>
                <p>{translate('AMSData.description')}</p>
            </div>  
            {/* <a href="https://www.ams-institute.org/news/wrap-ams-startup-booster-demo-day-meet-startups/" target='_blank' rel="noreferrer">
                        <Button
                            className='btn'
                            id='ams-btn'
                            buttonStyle='btn-primary'
                            buttonSize='btn--lge'>
                            {translate('AMSData.button')}
                        </Button>
                </a> */}
        </div> 
        }     
        <div className='ams-button-container'>
            <a href="https://www.ams-institute.org/news/wrap-ams-startup-booster-demo-day-meet-startups/" target='_blank' rel="noreferrer">
                        <Button
                            className='btn'
                            buttonStyle='btn-primary'
                            buttonSize='btn--lge'>
                            {translate('AMSData.button')}
                        </Button>
            </a>
        </div>
        </div>
    )
}
