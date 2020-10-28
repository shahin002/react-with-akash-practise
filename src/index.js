import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import HttpsRedirect from "react-https-redirect";
import { ToastContainer, toast } from 'react-toastify';
import LocalStorageService from "./services/LocalStorageService";

import App from './App';

// Import reducer
import { Provider } from "react-redux";

// Import Store
import Store from "./redux/backend/Store";

/*********** Start Import global CSS *************/
import "react-toastify/dist/ReactToastify.min.css";
/***********  End Import global CSS **************/

import * as serviceWorker from './serviceWorker';
toast.configure();


// Import axios.js so that it can inject token in every request
require ('./services/axios');

// Import Local storage to get access tokens
const localStorageService = LocalStorageService.getService();


ReactDOM.render(
    <Provider store={Store}>
        <HttpsRedirect>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </HttpsRedirect>
        <ToastContainer />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
