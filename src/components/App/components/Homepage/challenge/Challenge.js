import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
import './challenge.scss';
import translate from '../../../../i18n/translate';
import {Button} from '../../Button/Button';

export const Challenge = () => {
    useEffect(() => {
        Aos.init({duration: 1500});
        Aos.refresh({duration: 1500});
    }, [])

    return (
        <div className='challenge-container'>
            <div data-aos="fade-right" className='challenge-img-container'>
                <img src='./img/circular-change.png' alt='Circular Cycle'/>
            </div>
            <div data-aos="fade-left" className='challenge-text-container'>
                <h2>{translate('ChallengeData.title')}</h2>
                <h5>{translate('ChallengeData.date')}</h5>
                <p>{translate('ChallengeData.description')}</p>
                <a href="https://bluecity.nl/en/nieuws/bluecity-circular-challenge-hoogbouw" target='_blank' rel="noreferrer">
                        <Button
                            className='btn'
                            buttonStyle='btn-primary'
                            buttonSize='btn--lge'>
                            {translate('ChallengeData.button')}
                        </Button>
                </a>
            </div>        
        </div>
    )
}
