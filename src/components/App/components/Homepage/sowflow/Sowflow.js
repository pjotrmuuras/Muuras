import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
import './sowflow.scss';
import translate from '../../../../i18n/translate';
import {Button} from '../../Button/Button';

export const Sowflow = () => {
    useEffect(() => {
        Aos.init({duration: 1500});
        Aos.refresh({duration: 1500});
    }, [])

    return (
        <div className='sowflow-container'>
            <div data-aos="fade-left" className='sowflow-img-container'>
                <img src='./img/regieorgaan.png' alt='regieorgaan'/>
            </div>
            <div data-aos="fade-right" className='dinsdag-text-container'>
                <h2>{translate('SowflowData.title')}</h2>
                <h5>{translate('SowflowData.date')}</h5>
                <p>{translate('SowflowData.description')}</p>
                <a href="https://regieorgaan-sia.nl/financiering/kiem/" target='_blank' rel="noreferrer">
                        <Button
                            className='btn'
                            buttonStyle='btn-primary'
                            buttonSize='btn--lge'>
                            {translate('SowflowData.button')}
                        </Button>
                </a>
            </div>        
        </div>
    )
}
