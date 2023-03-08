import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/global.scss';

import Profile from "./components/Profile";
import Chat from "./components/Chat";

import reportWebVitals from './reportWebVitals';

const info = {
    profile: './img/profile.jpeg',
    name: 'Eva Jonson',
    position: 'Sales Manager',
    shortInfo: [
        'I will find the best offers for you.',
        'My services are absolutely free.'
    ],
    chat: {
        like: 131,
        comment: 14,
        messages: [
            {
                name: 'Samuel Jackson',
                date: '13 Apr 2022',
                text: 'Hey Eva! You\'re cool. Nice pic!'
            },
            {
                name: 'Angela Deimon',
                date: '10 Apr 2022',
                text: 'Thanks for your services! We really liked the ocean view room. We hope to cooperate in the near future. We are sure you will do everything to make our next holiday fantastic.'
            },
            {
                name: 'Ronald Harris',
                date: '8 Apr 2022',
                text: 'Eva, hello! There is such a question: How can I contact you if I am abroad in roaming?'
            }
        ]
    },
    services: {
        total: 15,
        items: [
            {
                name: 'Manual tour booking',
                interest: 65,
                amount: 11
            },
            {
                name: 'Package tours',
                interest: 30,
                amount: 7
            },
            {
                name: 'Hotels',
                interest: 25,
                amount: 1
            }
        ]
    }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Profile data={info}/>
        <Chat data={info}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
