/**
 * Store config w/ logger, persist, and router
 */
import { compose, createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';
import { browserHistory } from 'react-router';
import rootReducer from '../reducers/index';

const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: true,
});

const createStoreWithMiddleware = compose(applyMiddleware(thunk, logger), autoRehydrate())(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
