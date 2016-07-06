import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import TopicList from './components/TopicList'
import { path } from './common/helper'

export default (
    <Route path={path()} component={App}>
        <IndexRoute component={TopicList} />
    </Route>
)
