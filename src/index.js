import * as serviceWorker from './serviceWorker';
import store from './redux/reduxStore'
import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
//import StoreContext from "./StoreContext";
//import {Povider} from './StoreContext'
import {Provider} from 'react-redux'

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)



// renderEntireTree();
//
// store.subscribe(()=>{
//     let state = store.getState();
//     renderEntireTree(state)
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();  
