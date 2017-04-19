/**
 * Created by sinires on 18.04.17.
 */
import React from 'react'
import {Route, IndexRoute } from 'react-router'
import Test from "./components/Test"
export default (
    <div>
            <Route path='/' component={Test}>
                <IndexRoute component={Test} />
                <Route path='admin' component={Test} />
                <Route path='genre' component={Test} />
                <Route path='user' component={Test} >
                    <Route path='user/:id'/>
                </Route>
            </Route>
            {/* для всех остальных роутов: показывай NotFound */}
            <Route path='*' component={Test} />
    </div>
)