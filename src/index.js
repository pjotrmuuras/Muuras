import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/';
// import {BrowserRouter as Router} from 'react-router-dom';
// import './i18next';

ReactDOM.render(
  <React.StrictMode>
        {/* <Router>
        <ScrollToTop> */}
          <App />
        {/* </ScrollToTop>
     </Router>  */}
  </React.StrictMode>,
  document.getElementById('root')
);


