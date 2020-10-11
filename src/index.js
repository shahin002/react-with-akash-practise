import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import HttpsRedirect from "react-https-redirect";
import { ToastContainer, toast } from 'react-toastify';

import App from './App';

// Import reducer
import { Provider } from "react-redux";

// Import Store
import store from "./redux/backend/Store";

/*********** Start Import global CSS *************/
import "react-toastify/dist/ReactToastify.min.css";
/***********  End Import global CSS **************/

import * as serviceWorker from './serviceWorker';
toast.configure();

ReactDOM.render(
    <Provider store={store}>
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
