import React from 'react';
import { Hero } from './hero/Hero';
import {Footer} from '../footer/Footer';
import {Challenge} from './challenge/Challenge';
import { SwampSection } from './swampSection/SwampSection';
import { AMS } from './ams/AMS';
import {Dinsdag} from './dinsdag/dinsdag';

export const Homepage = () => {
    return (
        <div>
            <Hero />
            <SwampSection />
            <Dinsdag />
            <Challenge />
            <AMS/>
            <Footer/>
        </div>
    )
}
