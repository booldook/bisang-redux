import React, { useCallback } from "react";
import { useDispatch } from 'react-redux';
import store from './store';
import { logIn, logOut } from './store/action/auth-action';

function App() {
  const dispatch = useDispatch();

  const handleLogIn = useCallback(() => {
    dispatch(logIn('Bret'));
  }, [dispatch])

  const handleLogOut = useCallback(() => {
    dispatch(logOut());
  }, [dispatch])

  return (
    <div>
      <div>
        { store.getState().auth.isLogging.toString() }
      </div>
      <button onClick={handleLogIn}>로그인</button>
      <button onClick={handleLogOut}>로그아웃</button>
    </div>
  );
}

export default App;
