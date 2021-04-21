import React, {useEffect} from 'react';
import translate from '../i18n/translate';
import './contact.scss';

const Contactpage = () => {
    useEffect(() => {
        document.title = 'Muuras - Contact'
    })

    return (
        <div className='contact-container'>
            <h1>{translate('contact.title')}</h1>
            <p>{translate('contact.description')}</p>
            <p>{translate('contact.description2')} 
                <a href='mailto:pjotr@muuras.nl'>pjotr@muuras.nl</a></p>
        </div>
    )
}

export default Contactpage;