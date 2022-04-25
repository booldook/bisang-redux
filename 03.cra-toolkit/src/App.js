import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetCoord, retrieveCoord } from './store/slice/coord-slice'

const App = () => {
  const dispatch = useDispatch();
  const { lat, lon } = useSelector(state => state.coord);
  const handleGetCoord = useCallback(e => {
    dispatch(retrieveCoord());
  }, [dispatch]);

  const handleRemoveCoord = useCallback(e => {
    dispatch(resetCoord());
  }, [dispatch]);
  return (
    <div>
      <h1>lat: {lat} / lon: {lon}</h1>
      <button onClick={handleGetCoord}>좌표 가져오기</button>
      <button onClick={handleRemoveCoord}>좌표 지우기</button>
    </div>
  );
}

export default App;
