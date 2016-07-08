import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import TopicList from './components/TopicList'
import Topic from './components/Topic'
import LoginForm from './components/LoginForm'
import { path } from './common/helper'

export default (
    <Route path={path()} component={App}>
        <IndexRoute component={TopicList} />
        <Route path={path('auth/login')} component={LoginForm} />
        <Route path={path('t/:id')} component={Topic}/>
    </Route>
)
