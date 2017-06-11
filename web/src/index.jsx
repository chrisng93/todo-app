import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { Router, browserHistory, Route } from 'react-router';
import configureStore from './store/configureStore';
import App from './components/App';

const store = configureStore();
// persistStore(store);

// import stylesheets
require ('./stylesheets/app.scss');

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
