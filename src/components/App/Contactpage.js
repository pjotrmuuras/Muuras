import translate from '../i18n/translate';

const Contactpage = () => {
    return (
        <div className='contact-container'>
            <h1>{translate('contact.title')}</h1>
            <p>{translate('contact.description')}</p>
            <p>{translate('contact.description2')} pjotr@muuras.nl</p>
        </div>
    )
}

export default Contactpage;