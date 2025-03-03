import React, { useEffect } from 'react';
import './hero.scss';
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import { Button } from '../../Button/Button';
import translate from '../../../../i18n/translate';

export const Hero = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
        Aos.refresh();
    }, []);

    return (
        <div className='hero-container'>
            <div className='text-container'>
                <div className='text' data-aos='fade-right'>
                    <h1>Muuras</h1>
                    <h3>{translate('banner.description')}</h3>
                </div>

                <div className='hero-btns'>
                    <Link to='/contact'>
                        <Button className='btn' buttonStyle='btn-primary' buttonSize='btn--lge'>
                            {translate('banner.button1')}
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
