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
                <div className='about-container' >
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
                        <div className='item-img' id='pictures' data-aos='fade-left'>
                        <section className='transition_img-container'>
                                <img src='./img/cropped/water.png' alt='water' className='transition-img'/>
                                <div className='transition'>
                                    <div className='transition-text'>
                                        <p>{translate('whatWeDoImgs.water')}</p>
                                    </div>
                                </div>
                            </section>
                            <section className='transition_img-container'>
                                <img src='./img/cropped/city.png' alt='city' className='transition-img'/>
                                <div className='transition'>
                                    <div className='transition-text'>
                                        <p>{translate('whatWeDoImgs.city')}</p>
                                    </div>
                                </div>
                            </section>
                            <section className='transition_img-container'>
                                <img src='./img/cropped/biodiversity.png' alt='biodiversity' className='transition-img'/>
                                <div className='transition'>
                                    <div className='transition-text'>
                                        <p>{translate('whatWeDoImgs.biodiversity')}</p>
                                    </div>
                                </div>
                            </section>
                            <section className='transition_img-container'>
                                <img src='./img/cropped/co2.png' alt='co2' className='transition-img'/>
                                <div className='transition'>
                                    <div className='transition-text'>
                                        <p>{translate('whatWeDoImgs.co2')}</p>
                                    </div>
                                </div>
                            </section>
                            {/* <img src='./img/climate-adaptation.png' alt='Climate Adaptation'/> */}
                        </div>
                        <div className='item-text green' data-aos='fade-right'>
                            <h2>{translate('whatWeDo.3.title')}</h2>
                            <p>{translate('whatWeDo.3.text')}</p>
                        </div>
                    </div>
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
                            {/* <img src='./img/healthy-environment.png' alt='Healthy Environment'/> */}
                        </div>
                        <div className='item-text green' data-aos='fade-left'>
                            <h2>{translate('whatWeDo.4.title')}</h2>
                            <p>{translate('whatWeDo.4.text')}</p>
                        </div>
                    </div>
                </div>
        
    )
}

export default WhatWeDopage