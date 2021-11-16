import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
import './dinsdag.scss';
import translate from '../../../../i18n/translate';
import {Button} from '../../Button/Button';

export const dinsdag = () => {
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
                <h2>{translate('Dinsdagdata.title')}</h2>
                <h5>{translate('Dinsdagdata.date')}</h5>
                <p>{translate('Dinsdagdata.description')}</p>
                <a href="https://www.duurzamedinsdag.nl/Nieuws/Genomineerden-voor-themaprijzen-2021-bekend" target='_blank' rel="noreferrer">
                        <Button
                            className='btn'
                            buttonStyle='btn-primary'
                            buttonSize='btn--lge'>
                            {translate('DinsdagData.button')}
                        </Button>
                </a>
            </div>        
        </div>
    )
}
