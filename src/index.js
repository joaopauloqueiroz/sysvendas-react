import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './views/Login/Login'

import Comics from './views/Comics'
import Events from './views/Events'
import Stories from './views/Stories'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/comics" exact={true} component={Comics} />
            <Route path="/events" exact={true} component={Events} />
            <Route path="/stories" exact={true} component={Stories} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
serviceWorker.unregister();
