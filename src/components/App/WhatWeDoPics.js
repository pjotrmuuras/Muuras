import React from 'react'
import translate from '../i18n/translate';

const WhatWeDoPics = () => {
    return (
        <div className='item-img' id='pictures' data-aos='fade-right'>
        <section className='transition_img-container'>
            <img src='./img/cropped/heat.png' alt='heat' className='transition-img'/>
            <div className='transition'>
                <div className='transition-text'>
                    <p>{translate('whatWeDoImgs.heat')}</p>
                </div>
            </div>
        </section>
        <section className='transition_img-container'>
            <img src='./img/cropped/flowers.png' alt='flowers' className='transition-img'/>
            <div className='transition'>
                <div className='transition-text'>
                    <p>{translate('whatWeDoImgs.flowers')}</p>
                </div>
            </div>
        </section>
        <section className='transition_img-container'>
            <img src='./img/cropped/noise.png' alt='noise' className='transition-img'/>
            <div className='transition'>
                <div className='transition-text'>
                    <p>{translate('whatWeDoImgs.noise')}</p>
                </div>
            </div>
        </section>
    </div>
    )
}

export default WhatWeDoPics
