import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch, Route} from 'react-router-dom'
import history from './history.js';
import './index.less';
// import RoutersController from './router.js';
import loadable from 'react-dynamic-loadable';
import BasicLayout from './layout/BasicLayout';

import * as serviceWorker from './serviceWorker';

const dynamicWrapper = (component) => {
  return loadable({
    component: () => component
  });
}

const config = {
  '/': {
    component: dynamicWrapper(import('./layout/BasicLayout')),
  },
  '/home': {
    component: dynamicWrapper(import('./pages/home')),
  },
  '/search/:title': {
    component: dynamicWrapper(import('./pages/home')),
  },
  '/tags/:id': {
    component: dynamicWrapper(import('./pages/tags')),
  },
  '/details/:id': {
    component: dynamicWrapper(import('./pages/details')),
  }
};

const resetProps = {
  routerData: config
}

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route path="/" render={props => <BasicLayout {...props} {...resetProps} />} />
    </Switch>
  </Router>, 
  document.getElementById('root')
);

serviceWorker.unregister();
