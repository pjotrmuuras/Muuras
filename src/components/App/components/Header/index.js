import React, {useState} from 'react';
import './navbar.scss';
import {Link} from 'react-router-dom'
import {useContext, useCallback} from 'react';
import {LOCALES} from '../../../i18n/constants';
import {AppContext} from '../../../Context';
import translate from '../../../i18n/translate';

const Header = () => {
    const {state, dispatch} = useContext(AppContext);

    const setLanguage = useCallback((locale) => {
        dispatch({
            type: 'setLocale',
            locale
        })
    }, [dispatch])

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {setClicked(!clicked)};
    const closeMenuMobile = () => setClicked(false);

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='logo-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMenuMobile}>
                        {/* Updated Logo with proper attributes */}
                        <img 
                          src="img/logo-navbar.png" 
                          alt="Muuras Logo" 
                          className="header-logo-img"
                          style={{ 
                            display: 'block',
                            width: '150px',
                            height: '150px'
                          }}
                        />
                    </Link>
                </div>

                <div className='menu-icon' onClick={handleClick}>
                    <i id='bars-hover' className={clicked ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>

                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link' onClick={closeMenuMobile}>
                            {translate('menu.home')}
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/what-we-do' className='nav-link' onClick={closeMenuMobile}>
                            {translate('menu.about')}
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/who-we-are' className='nav-link' onClick={closeMenuMobile}>
                            {translate('menu.team')}
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/q&a' className='nav-link' onClick={closeMenuMobile}>
                            {translate('menu.qa')}
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-link' onClick={closeMenuMobile}>
                            {translate('menu.contact')}
                        </Link>
                    </li>
                    <li className='nav-flag'>
                        {state.locale === LOCALES.DUTCH ? (
                            <img 
                              src='./img/uk-flag.jpg' 
                              alt='english' 
                              title='Switch Language' 
                              className='flag_header' 
                              onClick={() => setLanguage(LOCALES.ENGLISH)} 
                            />
                        ) : null}
                        {state.locale === LOCALES.ENGLISH ? (
                            <img 
                              className='flag_header' 
                              src='./img/netherlands-flag.jpg' 
                              alt='dutch' 
                              title='Switch Language' 
                              onClick={() => setLanguage(LOCALES.DUTCH)}
                            />
                        ) : null}
                    </li>
                </ul>             
            </div>
        </nav>
    )
}

export default Header;
