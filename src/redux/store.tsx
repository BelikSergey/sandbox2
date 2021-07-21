import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import bascetReducer from './bascetReducer';

const store = createStore(
  bascetReducer,
  composeWithDevTools(),
);

export default store;