import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { browserHistory, Router } from 'react-router'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'

import thunk from 'redux-thunk'

import rootReducer from './reducers'
import routes from './routes'

var initState = {
    topicList: {
        fetching: true,
        topics:[]
    },
    topic: {
        fetching: true,
        topic: null
    },
    comments: {

    },
    user: {
        fetching: true,
        name: null
    }
}

const store = createStore(
    rootReducer,
    initState,
    compose(
        applyMiddleware(thunk, routerMiddleware(browserHistory)),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)
const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('app')
)


