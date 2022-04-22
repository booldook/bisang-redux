import { createStore } from 'redux';
import state from './state';
import reducer from './reducer';
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(reducer, state, composeWithDevTools());

export default store;