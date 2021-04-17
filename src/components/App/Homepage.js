import { AMS } from '../homepage/ams/AMS';
import {Hero} from '../homepage/hero/Hero'
import {Challenge} from '../homepage/challenge/Challenge';
import { SwampSection } from '../homepage/swampSection/SwampSection';

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