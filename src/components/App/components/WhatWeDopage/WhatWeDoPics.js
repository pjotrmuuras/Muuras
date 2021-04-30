import React, {useEffect} from 'react'
import translate from '../../../i18n/translate';
import Aos from 'aos';
import 'aos/dist/aos.css';

const WhatWeDoPics = () => {
    useEffect(() => {
        Aos.init({duration: 1500});
        Aos.refresh({duration: 1500});
    }, [])

    return (
        <div className='item'>
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
        <div className='item-text green' data-aos='fade-left'>
            <h2>{translate('whatWeDo.4.title')}</h2>
            <p>{translate('whatWeDo.4.text')}</p>
        </div>
    </div>
    )
}

export default WhatWeDoPics
