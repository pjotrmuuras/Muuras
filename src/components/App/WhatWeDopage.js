import React, {useEffect} from 'react';
import translate from "../i18n/translate";
import Aos from 'aos';
import 'aos/dist/aos.css';
import './whatwedo.scss';
import planter from '../../components/planter.mp4';

const WhatWeDopage = () => {
    useEffect(() => {
        Aos.init({duration: 1500});
        Aos.refresh({duration: 1500});
    }, [])

    return (
                <div className='about-container'>
                    <div className='video-container'>
                        <video src={planter} type='video/mp4' autoPlay loop muted playsInline style={{'max-width': '100%'}} />
                    </div>
                    <div className='item'>
                        <div className='item-text' data-aos='fade-right'>
                            <h2>{translate('whatWeDo.1.title')}</h2>
                            <p>{translate('whatWeDo.1.text')}</p>
                        </div>
                        <div className='item-img' data-aos='fade-left'>
                            <img src='./img/greenwall.jpg' alt='Green Wall'/>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='item-img' data-aos='fade-right'>
                            <img src='./img/waste.png' alt='Wastewater'/>
                        </div>
                        <div className='item-text' data-aos='fade-left'>
                            <h2>{translate('whatWeDo.2.title')}</h2>
                            <p>{translate('whatWeDo.2.text')}</p>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='item-text' data-aos='fade-right'>
                            <h2>{translate('whatWeDo.3.title')}</h2>
                            <p>{translate('whatWeDo.3.text')}</p>
                        </div>
                        <div className='item-img' data-aos='fade-left'>
                            <img src='./img/climate-adaptation.png' alt='Climate Adaptation'/>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='item-img' data-aos='fade-right'>
                            <section className='transition_img-container'>
                                <img src='./img/small/heat.png' alt='heat' height={250} className='transition-img'/>
                                <div className='transition'>
                                    <div className='transition-text'>
                                        <p>{translate('whatWeDoImgs.heat.text')}</p>
                                    </div>
                                </div>
                            </section>
                            <section className='transition_img-container'>
                                <img src='./img/small/flowers.png' alt='flowers' height={250} className='transition-img'/>
                                <div className='transition'>
                                    <div className='transition-text'>
                                        <p>{translate('whatWeDoImgs.flowers.text')}</p>
                                    </div>
                                </div>
                            </section>
                            <section className='transition_img-container'>
                                <img src='./img/small/noise.png' alt='noise' height={250} className='transition-img'/>
                                <div className='transition'>
                                    <div className='transition-text'>
                                        <p>{translate('whatWeDoImgs.noise.text')}</p>
                                    </div>
                                </div>
                            </section>
                            {/* <img src='./img/healthy-environment.png' alt='Healthy Environment'/> */}
                        </div>
                        <div className='item-text' data-aos='fade-left'>
                            <h2>{translate('whatWeDo.4.title')}</h2>
                            <p>{translate('whatWeDo.4.text')}</p>
                        </div>
                    </div>
                </div>
        
    )
}

export default WhatWeDopage