// import {FormattedMessage} from 'react-intl';
import Header from './components/Header';
import Footer from './components/Footer';
import {Switch, Route} from 'react-router-dom';
import Homepage from './Homepage';
import Teampage from './Teampage';
import WhatWeDopage from './WhatWeDopage';
import Contactpage from './Contactpage';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/team' component={Teampage}/>
        <Route path='/about' component={WhatWeDopage}/>
        <Route path='/contact' component={Contactpage}/>
      </Switch>
      <Footer/>
    </div>
  )
}

export default App
