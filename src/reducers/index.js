/**
 * Created by ftalaev on 07.03.17.
 */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'


import user from './user'
export default combineReducers({
    user,
    routing: routerReducer
})