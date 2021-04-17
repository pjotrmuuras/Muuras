import React, {useState, useEffect} from 'react';
import {Button} from '../../../Button';
import './navbar.scss';
import {FormattedMessage} from 'react-intl';
import {Link} from 'react-router-dom'
import {useContext, useCallback} from 'react';
import {LOCALES} from '../../../i18n/constants';
import {AppContext} from '../../../Context';

const Header = () => {
    const {state, dispatch} = useContext(AppContext);

    const setLanguage = useCallback((locale) => {
        dispatch({
            type: 'setLocale',
            locale
        })
    }, [dispatch])

    const [clicked, setClicked] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {setClicked(!clicked)};
    const closeMenuMobile = () => setClicked(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    const menu = {
        'home': '/',
        'about': '/about',
        'team': '/team',
        'contact': '/contact'
    }

    return (
        <header className='navbar'>
            <nav className='navbar-container'>
                <div className='logo-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMenuMobile}>
                        <img src='img/muuras.png' alt='' height={50}/>
                    </Link>
                </div>
                <div className='menu-icon' onClick={handleClick}>
                    <i id='bars-hover' className={clicked ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {Object.keys(menu).map(key => (
                        <li className='nav-item' key={key} onClick={closeMenuMobile}>
                            <a href={menu[key]} className='nav-link'>
                                <FormattedMessage id={`menu.${key}`}/>
                            </a>
                        </li>
                    ))}
                    <div className='nav-flags'>
                    <li className='nav-flag'>
                        {state.locale === LOCALES.DUTCH ? <img src='./img/uk-flag.jpg' alt='english' className='flag' onClick={() => setLanguage(LOCALES.ENGLISH)} /> : null}
                        {state.locale === LOCALES.ENGLISH ?<img className='flag' src='./img/netherlands-flag.jpg' alt='dutch'  onClick={() => setLanguage(LOCALES.DUTCH)}/> : null}
                    
                      {/* <img src='./img/uk-flag.jpg' alt='english' className='flag' onClick={() => setLanguage(LOCALES.ENGLISH)} disabled={state.locale === LOCALES.ENGLISH} /> */}
                    {/* <img className='flag' src='./img/netherlands-flag.jpg' alt='dutch' disabled={state.locale === LOCALES.DUTCH} onClick={() => setLanguage(LOCALES.DUTCH)}/> */}
                    </li>
                    </div>
                </ul>
                   
                {/* </div> */}
                {/* {button && <Button buttonStyle='btn--primary'>
                       <Link to='/contact' className='contact-btn'>
                      
                         Contact
                         </Link>
                     </Button>} */}

            </nav>
        </header>
    )
}

export default Header;
