import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import counterReducer from '../features/counter/counterSlice';

const myMiddleware = (store) => (next) => (action) => {
  console.log('미들웨어 디스패치 전');
  next(action);
  console.log('미들웨어 디스패치 후');
}

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(myMiddleware, logger),
  devTools: process.env.NODE_ENV !== 'production',
});
