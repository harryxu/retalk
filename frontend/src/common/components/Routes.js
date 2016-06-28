import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import LoginPage from '../../pages/login.js';
import HomePage from '../../pages/home.js';


export default (basePath) => {
    return (
        <Route path={basePath} component={App}>
            <IndexRoute component={LoginPage} />
            <Route path="home" component={HomePage} />
        </Route>
    );
}
