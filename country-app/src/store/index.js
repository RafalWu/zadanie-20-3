import { createStore, combineReducers } from 'redux';
import reducers from '../reducers/index';
import DevTools from './DevTools';

const store = createStore(
  reducer,
  DevTools.instrument()
);

export default store;