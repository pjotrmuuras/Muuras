// import {FormattedMessage} from 'react-intl';
import Header from './components/Header';
import Footer from './components/Footer';
import {Switch, Route} from 'react-router-dom';
import Homepage from './Homepage';
import Teampage from './Teampage';
import WhatWeDopage from './WhatWeDopage';
// import Form from './components/Form';
// import { AMS } from '../homepage/ams/AMS';
// import {Hero} from '../homepage/hero/Hero'
// import {Challenge} from '../homepage/challenge/Challenge';
// import { SwampSection } from '../homepage/swampSection/SwampSection';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/team' component={Teampage}/>
        <Route path='/about' component={WhatWeDopage}/>
        {/* <Route path='/vertical-swamp' component={WhatWeDo}/>
        <Route path='/contact' component={Contact}/> */}
      </Switch>
      <Footer/>
    </div>
  )
}

export default App
