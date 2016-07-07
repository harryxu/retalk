import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { browserHistory, Router } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

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

    }
}

const store = createStore(
    rootReducer,
    initState,
    applyMiddleware(thunk)
)
const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('app')
)


