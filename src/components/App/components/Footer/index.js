/* eslint-disable react-hooks/exhaustive-deps */
import {useContext, useCallback} from 'react';
import {LOCALES} from '../../../i18n/constants';
import {AppContext} from '../../../Context';
import './footer.scss';
import {Email} from '@material-ui/icons';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
    const {state, dispatch} = useContext(AppContext);

    const setLanguage = useCallback((locale) => {
        dispatch({
            type: 'setLocale',
            locale
        })
    }, [])

    return (
        <footer className='container'>
             <div className='icon-container'>
             <ul>
                <li>
                    <button disabled={state.locale === LOCALES.ENGLISH} onClick={() => setLanguage(LOCALES.ENGLISH)}>English</button>
                </li>
                <li>
                    <button disabled={state.locale === LOCALES.DUTCH} onClick={() => setLanguage(LOCALES.DUTCH)}>Dutch</button>
                </li>
            </ul>
                <a href='mailto:pjotr@muuras.nl'>
                <Email className='icon'fontSize='large'/>
                </a>
                <a href='https://www.linkedin.com/company/muuras/' target='_blank' rel="noreferrer">
                    <LinkedInIcon className='icon'fontSize='large'/>
                </a>
            </div>
            <p className='title'>@Muuras 2021</p>
        </footer>
    )
}

export default Footer