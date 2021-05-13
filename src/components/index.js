import App from './App';
import Provider from './Provider';
import {AppContextProvider} from './Context';
import ScrollToTop from 'react-router-scroll-top';
import {BrowserRouter as Router} from 'react-router-dom';
// import ScrollToTop from './App/ScrollToTop';

export default () => (
    <AppContextProvider>
        <Provider>
        <Router>
            <ScrollToTop >
            <App/>
            </ScrollToTop>
            </Router>
        </Provider>
    </AppContextProvider>
);