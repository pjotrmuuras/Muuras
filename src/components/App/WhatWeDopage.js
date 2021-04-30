import React, {useEffect} from 'react';
import translate from "./../i18n/translate";
import Aos from 'aos';
import "aos/dist/aos.css";
import './components/WhatWeDopage/whatwedo.scss';
import planter from '../../components/planter.mp4';
import WhatWeDoPics from './components/WhatWeDopage/WhatWeDoPics';
import IdeaPics from './components/WhatWeDopage/IdeaPics';

const WhatWeDopage = () => {
    useEffect(() => {
        document.title = 'Muuras - What We Do'
        Aos.init({duration: 1500});
        Aos.refresh({duration: 1500});
    }, [])

    return (
                <div className='about-container' >
                    <div className='item'>
                        <div className='item-img' id='about-banner' data-aos='fade-left'>
                            <img src='./img/greenwall.jpg' alt='Green Wall'/>
                        </div>
                        <div className='item-text green' data-aos='fade-right'>
                            <h2>{translate('whatWeDo.1.title')}</h2>
                            <p>{translate('whatWeDo.1.text')}</p>
                        </div>
                    </div>
                    <div className='video-container'>
                        <video src={planter} type='video/mp4' autoPlay loop muted playsInline style={{'max-width': '100%'}} />
                    </div>
                    <div className='item' id='wastewater'>
                        <div className='item-img' data-aos='fade-right'>
                            <img src='./img/waste.png' alt='Wastewater' id='wastewater-img'/>
                        </div>
                        <div className='item-text green' id='wastewater-text' data-aos='fade-left'>
                            <h2>{translate('whatWeDo.2.title')}</h2>
                            <p>{translate('whatWeDo.2.text')}</p>
                        </div>
                    </div>
                    <div className='item'>
                        <IdeaPics />
                        <div className='item-text green' data-aos='fade-right'>
                            <h2>{translate('whatWeDo.3.title')}</h2>
                            <p>{translate('whatWeDo.3.text')}</p>
                        </div>
                    </div>
                    <div className='item'>
                        <WhatWeDoPics />
                        <div className='item-text green' data-aos='fade-left'>
                            <h2>{translate('whatWeDo.4.title')}</h2>
                            <p>{translate('whatWeDo.4.text')}</p>
                        </div>
                    </div>
                </div>
        
    )
}

export default WhatWeDopage