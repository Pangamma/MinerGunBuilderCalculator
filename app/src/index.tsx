import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import { store } from './store';
import { App } from './app';
import { appHistory, appRoutes } from './routes';

import './style/common.scss';
import { HomeIndex } from './components/pages/home';

// const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') || undefined;
const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
      <Router history={appHistory}>
        <App>
          <Switch>
            {appRoutes.map((route, index) => <Route key={index} path={route.path} component={route.component} exact={route.exact} />)}

            {/* TODO: Create a 404 not found page */}
            <Route path='*' exact={true} component={HomeIndex} />
          </Switch>
        </App>
      </Router>
    </Provider>,
  rootElement);

