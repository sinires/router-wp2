/**
 * Created by ftalaev on 07.03.17.
 */
import { createStore, applyMiddleware, compose} from 'redux'
import rootReducer from '../reducers'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import {development} from '../../build'


export default function configureStore(initialState) {
    const logger = createLogger(),
          middleware = development
              ? compose(
                    applyMiddleware(thunk, logger),
                    window.__REDUX_DEVTOOLS_EXTENSION__
                    && window.__REDUX_DEVTOOLS_EXTENSION__()
                )
              : applyMiddleware(thunk)
        , store = createStore(rootReducer, initialState, middleware);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}