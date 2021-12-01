import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import './components/WhatWeDopage/whatwedo.scss';
import WhatWeDoPics from './components/WhatWeDopage/WhatWeDoPics';
import IdeaPics from './components/WhatWeDopage/IdeaPics';
import Video from './components/WhatWeDopage/Video';
import AboutBanner from './components/WhatWeDopage/AboutBanner';

const WhatWeDopage = () => {
    useEffect(() => {
        document.title = 'Muuras - What We Do'
        Aos.init({duration: 1500});
        Aos.refresh({duration: 1500});
    }, [])

    return (
                <div className='about-container' >
                    <IdeaPics />
                    <WhatWeDoPics />
                </div>
        
    )
}

export default WhatWeDopage
