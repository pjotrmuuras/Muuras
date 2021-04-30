import React from 'react';
import translate from '../../../i18n/translate';

const AboutBanner = () => {
    return (
        <div className='item'>
            <div className='item-img' id='about-banner' data-aos='fade-left'>
                <img src='./img/greenwall.jpg' alt='Green Wall'/>
            </div>
            <div className='item-text green' data-aos='fade-right'>
                <h2>{translate('whatWeDo.1.title')}</h2>
                <p>{translate('whatWeDo.1.text')}</p>
            </div>
        </div>
    )
}

export default AboutBanner
