import React from 'react';
import translate from '../../../i18n/translate';

const Waste = () => {
    return (
        <div className='item' id='wastewater'>
            <div className='item-img' data-aos='fade-right'>
                <img src='./img/waste.png' alt='Wastewater' id='wastewater-img'/>
            </div>
            <div className='item-text green' id='wastewater-text' data-aos='fade-left'>
                <h2>{translate('whatWeDo.2.title')}</h2>
                <p>{translate('whatWeDo.2.text')}</p>
            </div>
        </div>
    )
}

export default Waste
