import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import coordSlice from './slice/coord-slice';

const middlewares = [];
const myMiddleware = (store) => (next) => (action) => {
  // console.log('미들웨어 디스패치 전');
  next(action);
  // console.log('미들웨어 디스패치 후');
}

middlewares.push(myMiddleware);
if(process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

/* const reducer = combineReducers({
  coord: coordSlice.reducer
})
 */
export default configureStore({
  reducer: {
    coord: coordSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middlewares),
  devTools: process.env.NODE_ENV !== 'production',
});
