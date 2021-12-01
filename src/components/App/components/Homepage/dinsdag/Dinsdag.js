import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
import './dinsdag.scss';
import translate from '../../../../i18n/translate';
import {Button} from '../../Button/Button';

export const Dinsdag = () => {
    useEffect(() => {
        Aos.init({duration: 1500});
        Aos.refresh({duration: 1500});
    }, [])

    return (
        <div className='dinsdag-container'>
            <div data-aos="fade-right" className='dinsdag-img-container'>
                <img src='./img/duurzamedinsdag.jpeg' alt='Duurzame Dinsdag'/>
            </div>
            <div data-aos="fade-left" className='dinsdag-text-container'>
                <h2>{translate('DinsdagData.title')}</h2>
                <h5>{translate('DinsdagData.date')}</h5>
                <p>{translate('DinsdagData.description')}</p>
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
