import { createStore } from 'redux';
import { combineReducers, install } from 'redux-loop';

// FIX ME change path to absolute type
import auth from './auth';

const reducer = combineReducers({
  auth,
});

// initialState = {}
const store = createStore(reducer, {}, install());

export {
  store,
};
