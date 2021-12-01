import React from 'react';
import { Hero } from './hero/Hero';
import {Footer} from '../footer/Footer';
import {Challenge} from './challenge/Challenge';
import { SwampSection } from './swampSection/SwampSection';
import { AMS } from './ams/AMS';
import {Dinsdag} from './dinsdag/Dinsdag';
import {Sowflow} from './sowflow/Sowflow';

export const Homepage = () => {
    return (
        <div>
            <Hero />
            <SwampSection />
            <Dinsdag />
            <Sowflow/>
            <Challenge />
            <AMS/>
            <Footer/>
        </div>
    )
}
