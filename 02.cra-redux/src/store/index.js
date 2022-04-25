import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { composeWithDevTools } from '@redux-devtools/extension';

/*
const middleware = (store) => {
  ...
  return (next) => {
    ...
    return (action) => {
      ...
    }
  }
}

*/

const middleware = (store) => (next) => (action) => {
  console.log('디스패치 전1');
  next(action);
  console.log('디스패치 후1');
}

const myThunk = (store) => (next) => (action) => {
  if(typeof action.type === 'function') {
    action.type(action.payload).then((response) => {
        next(response);
      }
    ).catch((err) => {
      next(err);
    }) // 비동기 함수
  }
}


// const store = createStore(reducer, state, composeWithDevTools());
// const store = createStore(reducer, applyMiddleware(middleware));
const store = createStore(reducer, composeWithDevTools(applyMiddleware(middleware, thunk)));

// thunk는 함수로 구성된 액션이라면. 함수를 실행

export default store;