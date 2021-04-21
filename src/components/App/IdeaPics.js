import React from 'react'
import translate from '../i18n/translate';

const IdeaPics = () => {
    return (
        <div className='item-img' id='pictures' data-aos='fade-left'>
        <section className='transition_img-container'>
                <img src='./img/cropped/water.png' alt='water' className='transition-img'/>
                <div className='transition'>
                    <div className='transition-text'>
                        <p>{translate('whatWeDoImgs.water')}</p>
                    </div>
                </div>
            </section>
            <section className='transition_img-container'>
                <img src='./img/cropped/city.png' alt='city' className='transition-img'/>
                <div className='transition'>
                    <div className='transition-text'>
                        <p>{translate('whatWeDoImgs.city')}</p>
                    </div>
                </div>
            </section>
            <section className='transition_img-container'>
                <img src='./img/cropped/biodiversity.png' alt='biodiversity' className='transition-img'/>
                <div className='transition'>
                    <div className='transition-text'>
                        <p>{translate('whatWeDoImgs.biodiversity')}</p>
                    </div>
                </div>
            </section>
            <section className='transition_img-container'>
                <img src='./img/cropped/co2.png' alt='co2' className='transition-img'/>
                <div className='transition'>
                    <div className='transition-text'>
                        <p>{translate('whatWeDoImgs.co2')}</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default IdeaPics