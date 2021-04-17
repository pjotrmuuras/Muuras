import {FormattedMessage} from 'react-intl';
import Header from './components/Header';
import Footer from './components/Footer';
// import Form from './components/Form';
import { AMS } from '../homepage/ams/AMS';
import {Hero} from '../homepage/hero/Hero'
import {Challenge} from '../homepage/challenge/Challenge';
import { SwampSection } from '../homepage/swampSection/SwampSection';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Hero/>
      <SwampSection/>
      <Challenge/>
      <AMS />
      <Footer/>
    </div>
  )
}

export default App
