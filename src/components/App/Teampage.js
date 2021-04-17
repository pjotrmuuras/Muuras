import translate from '../i18n/translate';
import './team.scss';

const Teampage = () => {
    return (
        <div className='teampage-container'>
            <div className='title-container'>
                <h1>The Team</h1>
            </div>
            <div className='card-container'>
            <div className='team-card'>
                     <div className='card-img'>
                        <img src='./img/gijs-square.png' alt={translate('teamInfo.Gijs.alt')}/>
                    </div>
                    <div className='card-text'>
                        <h3>{translate('teamInfo.Gijs.name')}</h3>
                        <p>{translate('teamInfo.Gijs.info')}</p>
                    </div>
            </div>
            <div className='team-card'>
                     <div className='card-img'>
                        <img src='./img/lydia-square.png' alt={translate('teamInfo.Lydia.alt')}/>
                    </div>
                    <div className='card-text'>
                        <h3>{translate('teamInfo.Lydia.name')}</h3>
                        <p>{translate('teamInfo.Lydia.info')}</p>
                    </div>
            </div>
            <div className='team-card'>
                     <div className='card-img'>
                        <img src='./img/pjotr-square.png' alt={translate('teamInfo.Pjotr.alt')}/>
                    </div>
                    <div className='card-text'>
                        <h3>{translate('teamInfo.Pjotr.name')}</h3>
                        <p>{translate('teamInfo.Pjotr.info')}</p>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default Teampage