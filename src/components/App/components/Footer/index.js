/* eslint-disable react-hooks/exhaustive-deps */
import {useContext, useCallback} from 'react';
import {LOCALES} from '../../../i18n/constants';
import {AppContext} from '../../../Context';


const Footer = () => {
    const {state, dispatch} = useContext(AppContext);

    const setLanguage = useCallback((locale) => {
        dispatch({
            type: 'setLocale',
            locale
        })
    }, [])

    return (
        <div>
            <ul>
                <li>
                    <button disabled={state.locale === LOCALES.ENGLISH} onClick={() => setLanguage(LOCALES.ENGLISH)}>English</button>
                </li>
                <li>
                    <button disabled={state.locale === LOCALES.DUTCH} onClick={() => setLanguage(LOCALES.DUTCH)}>Dutch</button>
                </li>
            </ul>
        </div>
    )
}

export default Footer