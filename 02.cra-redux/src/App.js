import React, { useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { logIn, logOut } from './store/action/auth-action';

function App() {
  const dispatch = useDispatch();
  const isLogging = useSelector(state => state.auth.isLogging);
  const user = useSelector(state => state.auth.user);

  const handleLogIn = useCallback(() => {
    dispatch(logIn('Bret'));
  }, [dispatch])

  const handleLogOut = useCallback(() => {
    dispatch(logOut());
  }, [dispatch])

  return (
    <div>
      <div>
        { isLogging.toString() }
      </div>
      <div>
        { user && user.username }
      </div>
      <button onClick={handleLogIn}>로그인</button>
      <button onClick={handleLogOut}>로그아웃</button>
    </div>
  );
}

export default App;
