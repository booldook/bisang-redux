import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import coordSlice from './slice/coord-slice';

const myMiddleware = (store) => (next) => (action) => {
  console.log('미들웨어 디스패치 전');
  next(action);
  console.log('미들웨어 디스패치 후');
}

export default configureStore({
  reducer: {
    coord: coordSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(myMiddleware, logger),
  devTools: process.env.NODE_ENV !== 'production',
});
