import { AMS } from './components/Homepage/ams/AMS';
import {Hero} from './components/Homepage/hero/Hero'
import {Challenge} from './components/Homepage/challenge/Challenge';
import { SwampSection } from './components/Homepage/swampSection/SwampSection';

const Homepage = () => {
    return (
        <div className='homepage-container'>
            <Hero/>
            <SwampSection/>
            <Challenge/>
            <AMS />
        </div>
    )
}

export default Homepage