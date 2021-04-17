import {FormattedMessage} from 'react-intl';
import Header from './components/Header';
import Footer from './components/Footer';
// import Form from './components/Form';
import { AMS } from '../homepage/ams/AMS';
import {Challenge} from '../homepage/challenge/Challenge';

function App() {
  return (
    <div className='App'>
      <Header/>
      {/* <Form /> */}
      {/* <ChallengeData/> */}
      <Challenge/>
      <AMS />
      <Footer/>
    </div>
  )
}

export default App
