/**
 * Created by pbxadmin on 07.03.17.
 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import Routers from "./routes"

import { Router, browserHistory } from 'react-router'

import {syncHistoryWithStore} from "react-router-redux"

const store = configureStore(),
      history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
            {Routers}
        </Router>
    </Provider>,
    document.getElementById('root')
);
