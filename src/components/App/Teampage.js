import React, {useEffect} from 'react';
import translate from '../i18n/translate';
import './components/Team/team.scss';
import Aos from "aos";
import "aos/dist/aos.css";

const Teampage = () => {
    useEffect(() => {
        document.title = 'Muuras - Our Team';
        Aos.init({duration: 1500})
        Aos.refresh({duration: 1500});
    }, [])
    return (
        <div className='teampage-container'>
            <div className='title-container'>
                <h1>Who We Are</h1>
            </div>
            <div className='card-container'>
                <div className='team-card' data-aos='fade-up'>
                     <div className='card-img'>
                        <img src='./img/gijs-square.png' alt={translate('teamInfo.Gijs.alt')}/>
                    </div>
                    <div className='card-text'>
                        <h3>{translate('teamInfo.Gijs.name')}</h3>
                        <p>{translate('teamInfo.Gijs.info')}</p>
                    </div>
                </div>
                <div className='team-card' data-aos='fade-up'>
                     <div className='card-img'>
                        <img src='./img/lydia-square.png' alt={translate('teamInfo.Lydia.alt')}/>
                    </div>
                    <div className='card-text'>
                        <h3>{translate('teamInfo.Lydia.name')}</h3>
                        <p>{translate('teamInfo.Lydia.info')}</p>
                    </div>
                </div>
                <div className='team-card' data-aos='fade-up'>
                     <div className='card-img'>
                        <img src='./img/pjotr-square.png' alt={translate('teamInfo.Pjotr.alt')}/>
                    </div>
                    <div className='card-text'>
                        <h3>{translate('teamInfo.Pjotr.name')}</h3>
                        <p>{translate('teamInfo.Pjotr.info')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teampage