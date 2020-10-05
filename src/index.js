import "react-app-polyfill/ie11"
import "react-app-polyfill/stable"
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import HttpRedirect from "react-https-redirect";

import {ToastContainer, toast} from "react-toastify";

import App from './App';
import * as serviceWorker from './serviceWorker';

// Import reducer
import {Provider} from "react-redux";
import store from "./redux/backend/Store";

/*********** Start Import global CSS *************/
import './assets/dashboard/css/oneui.min.css';
import "react-toastify/dist/ReactToastify.min.css";
/***********  End Import global CSS **************/

// toast.configure();

ReactDOM.render(
    <Provider store={store}>
        <HttpRedirect>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </HttpRedirect>
        <ToastContainer />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
