import {FormattedMessage} from 'react-intl';

const Header = () => {
    const menu = {
        'home': '/home',
        'about': '/about',
        'team': '/team',
        'contact': 'https://site.com/contact'
    }
    return (
        <header>
            <nav>
                <ul>
                    {Object.keys(menu).map(key => (
                        <li key={key}>
                            <a href={menu[key]}>
                                <FormattedMessage id={`menu.${key}`}/>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header;