import React, {useEffect} from 'react';
import './swamp-section.scss';
import {Button} from '../../Button';
import {Link} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import translate from '../../i18n/translate';

export const SwampSection = () => {

    useEffect(() => {
        Aos.init({duration: 1500});
        Aos.refresh({duration: 1500});
    }, []) 

    return (
        <div className='swamp-container'>  
            <div className='swamp-info'>
                <div className='swamp-text' data-aos='fade-left'>
                <h2>{translate('swamp.title')}</h2>
                    <p>{translate('swamp.description')}</p>
                    <div className='btn-container'>
                        <Link to='/vertical-swamp'>
                        <Button
                            className='btn'
                            buttonStyle='btn-primary'
                            buttonSize='btn--lge'>
                            {translate('swamp.button')}
                        </Button>
                        </Link>
                    </div>
                </div>
                <div className='swamp-img' data-aos='fade-right'>
                    <img src='./img/muuras-building.jpg' alt='Muuras building'/>
                </div>
            </div>
        </div>
    )
}