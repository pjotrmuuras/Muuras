import translate from "../i18n/translate"

const WhatWeDopage = () => {
    return (
  
                <div>
                    <div className='item'>
                        <h2>{translate('whatWeDo.1.title')}</h2>
                        <p>{translate('whatWeDo.1.text')}</p>
                        <img src='./img/greenwall.jpg' alt='Green Wall'/>
                    </div>
                    <div className='item'>
                        <h2>{translate('whatWeDo.2.title')}</h2>
                        <p>{translate('whatWeDo.2.text')}</p>
                        <img src='./img/waste.png' alt='Wastewater'/>
                    </div>
                    <div className='item'>
                        <h2>{translate('whatWeDo.3.title')}</h2>
                        <p>{translate('whatWeDo.3.text')}</p>
                        <img src='./img/climate-adaptation.png' alt='Climate Adaptation'/>
                    </div>
                    <div className='item'>
                        <h2>{translate('whatWeDo.4.title')}</h2>
                        <p>{translate('whatWeDo.4.text')}</p>
                        <img src='./img/healthy-environment.png' alt='Healthy Environment'/>
                    </div>
                </div>
        
    )
}

export default WhatWeDopage