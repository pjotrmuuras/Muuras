/* eslint-disable import/no-anonymous-default-export */
import {LOCALES} from '../constants';

export default {
    [LOCALES.ENGLISH]: {
            title: "Winner of the Circular Challenge: High rise",
            menu: {
                home: 'Home',
                about: 'What We Do',
                team: 'Our Team',
                contact: 'Contact'
            },
            form: {
                name: {
                    placeholder: 'Enter your name here...'
                }
            },
            AMSData: {
                title: 'Boosting at the AMS Institute',
                date: 'October 2020 - February 2021',
                description: 'During the winter 20/21, Muuras partook in the AMS Startup Booster at the Marineterrein in Amsterdam. Together with six other young startups that focus on solving urban challenges, we further developed our product and the market-fit of Muuras.'
            },
            ChallengeData: {
                title: 'Winner of the Circular Challenge: High rise',
                date: 'April-June 2020',
                description: 'In June 2020, we won the Circular Challenge: High-rise at BlueCity010. We worked together with the waterboard of Schieland & Krimpenerwaard to develop a in-house solution to save wastewater in highrise buildings.',
                image: './img/circular-change.png'
            }
    }
}