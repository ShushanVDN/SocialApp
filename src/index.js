import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker'
import './index.css';
import App from './App';
import { renderEntireTree } from './render'
import state from './redux/state'


// const posts = [
//     {id: 1, message: 'How are you', likesCount: 12},
//     {id: 2, message: 'What is your name', likesCount: 17},
//     {id: 3, message: 'This is my first post', likesCount: 20},  
//     {id: 4, message: 'I receive some projecs', likesCount: 7},
//     {id: 5, message: 'I like coding', likesCount: 65},
//     {id: 6, message: 'yeaaahh', likesCount: 14},  
// ]

// const DialogsData = [
//     {id: 1, name: 'Anna'},
//     {id: 2, name: 'Hakob'},
//     {id: 3, name: 'Gohar'},  
//     {id: 4, name: 'David'},
//     {id: 5, name: 'Margarita'},
//     {id: 6, name: 'Robert'},  
// ]

// const messages= [
//     {id: 1, message: 'How is your React'},
//     {id: 2, message: 'Hakob how are you'},
//     {id: 3, message: 'How long you work there'},  
//     {id: 4, message: 'Can I help you'},
//     {id: 5, message: 'Thats great'},
//     {id: 6, message: 'yo'},  
// ]
//addPost('samurai js')

renderEntireTree(state);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();  