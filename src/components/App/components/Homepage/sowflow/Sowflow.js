import React, {useEffect} from 'react';
import './sowflow.scss';
import {Button} from '../../Button/Button';
import {Link} from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";
import translate from '../../../../i18n/translate';

export const Sowflow = () => {

    useEffect(() => {
        Aos.init({duration: 1500});
        Aos.refresh({duration: 1500});
    }, []) 

    return (
        <div className='sowflow-container'>  
            <div className='sowflow-info'>
                <div className='sowflow-text' data-aos='fade-left'>
                <h2>{translate('sowflow.title')}</h2>
                    <p>{translate('sowflow.description')}</p>
                    <div className='btn-container'>
                        <Link to='/about'>
                        <Button
                            className='btn'
                            buttonStyle='btn-primary'
                            buttonSize='btn--lge'>
                            {translate('sowflow.button')}
                        </Button>
                        </Link>
                    </div>
                </div>
                <div className='sowflow-img' data-aos='fade-right'>
                    <img src='./img/regieorgaan.png' alt='regieorgaan'/>
                </div>
            </div>
        </div>
    )
}
