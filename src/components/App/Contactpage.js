import React, {useEffect} from 'react';
import translate from '../i18n/translate';
import './components/Contactpage/contact.scss';
import Video from './components/WhatWeDopage/Video';

const Contactpage = () => {
    useEffect(() => {
        document.title = 'Muuras - Contact'
    })

    return (
        <div className='contact-container'>
            <h1>{translate('contact.title')}</h1>
            <p>{translate('contact.description')}</p>
            <p>{translate('contact.description2')} 
                <a href='mailto:pjotr@muuras.nl'>pjotr@muuras.nl</a>
            </p>
            <p>{translate('contact.description3')}</p>
            <Video />
        </div>
    )
}

export default Contactpage;