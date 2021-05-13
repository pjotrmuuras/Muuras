import React, {useEffect} from 'react';
import './components/QApage/qa.scss';
import translate from '../i18n/translate';
import './components/QApage/qa.scss';
import Aos from "aos";
import "aos/dist/aos.css";
// import greenwall from './img/greenwall2.jpg'
// import greenwall2 from '../../../public/img/greenwall3.jpg'

const QAPage = () => {
    useEffect(() => {
        document.title = 'Muuras - Our Team';
        Aos.init({duration: 1500});
        Aos.refresh({duration: 1500});
    }, [])

    return (
        <div className='qapage-container'>
            <h1>Q & A</h1>
            <div className='qa-container' data-aos='fade-up'>
                <div className='qa-section'>
                    <div className='section-text'>
                        <div>
                            <p className='question'>{translate('fandq.1.question')}</p>
                            <p>{translate('fandq.1.answer')}</p>
                        </div>
                        
                        <div>
                            <p className='question'>{translate('fandq.2.question')}</p>
                            <p>{translate('fandq.2.answer')}</p>
                        </div>
                    </div>
                    <div className='section-picture'>
                        <img className='qa-picture' src='/img/greenwall3.jpg' alt='Green Wall' />
                    </div>
                </div>

                <div>
                <div className='qa-section'>
                    <div className='section-text'>
                        <div>
                            <p className='question'>{translate('fandq.3.question')}</p>
                            <p>{translate('fandq.3.answer')}</p>
                        </div>

                        <div>
                            <p className='question'>{translate('fandq.4.question')}</p>
                            <p>{translate('fandq.4.answer')}</p>
                        </div>

                        <div>
                            <p className='question'>{translate('fandq.5.question')}</p>
                            <p>{translate('fandq.5.answer')}</p>
                        </div>
                    </div>
                    <div className='section-picture'>
                        <img className='qa-picture' src='/img/drawing.png' alt='Drawing of design'/>
                    </div>
                </div>

                <div className='qa-section'>
                    <div className='section-text'>
                        <div>
                            <p className='question'>{translate('fandq.6.question')}</p>
                            <p>{translate('fandq.6.answer')}</p>
                        </div>
                        
                        <div>
                            <p className='question'>{translate('fandq.7.question')}</p>
                            <p>{translate('fandq.7.answer')}</p>
                        </div>

                        <div>
                            <p className='question'>{translate('fandq.8.question')}</p>
                            <p>{translate('fandq.8.answer')}</p>
                        </div>

                        <div>
                            <p className='question'>{translate('fandq.9.question')}</p>
                            <p>{translate('fandq.9.answer')}</p>
                        </div>
                    </div>
                    <div className='section-picture'>
                        <img className='qa-picture' src='/img/greenwall2.jpg' alt='Greenwall' />
                    </div>
                </div>

                <div className='qa-section'>
                    <div className='section-text'>
                        <div>
                            <p className='question'>{translate('fandq.10.question')}</p>
                            <p>{translate('fandq.10.answer')}</p>
                        </div>

                        <div>
                            <p className='question'>{translate('fandq.11.question')}</p>
                            <p>{translate('fandq.11.answer')}</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default QAPage

// {translate('menu.qa')}