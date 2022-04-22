const { createStore } = require('redux');

/* state */
const state = {
  str: '',
  num: 1,
  obj: null,
}

/* action creater(객체) */
const changeStr = (payload) => {
  return {
    type: 'CHANGE_STR',
    payload: payload.toString() 
  }
}

const changeNum = (payload) => {
  return {
    type: 'CHANGE_NUM',
    payload: Number(payload) 
  }
}

const changeObj = (payload) => {
  return {
    type: 'CHANGE_OBJ',
    payload
  }
}


/* reducer(하나의 함수) */
const reducer = (prevState, action) => {
  switch(action.type) {
    case 'CHANGE_STR':
      return {
        ...prevState,
        str: action.payload,
      };
    case 'CHANGE_NUM':
      return {
        ...prevState,
        num: action.payload,
      };
    case 'CHANGE_OBJ':
      return {
        ...prevState,
        obj: action.payload
      };
    default:
      return prevState;
  }
}

/* store init */
const store = createStore(reducer, state);

/* subscribe(구독요청) - react는 자체 구현이 되어 있음 */
store.subscribe(() => {
  console.log(store.getState());
})


/* 실행(dispatch) */
console.log(store.getState());
store.dispatch(changeStr('A'));
store.dispatch(changeNum(2));
store.dispatch(changeObj({
  userId: 'booldook',
  userName: '불뚝',
}));

/* store.dispatch({ // 동기
  type: 'CHANGE_STR',
  payload: 'A',
});
store.dispatch({ // 동기
  type: 'CHANGE_STR',
  payload: 'B',
});
store.dispatch({ // 동기
  type: 'CHANGE_NUM',
  payload: 2,
});
store.dispatch({ // 동기
  type: 'CHANGE_OBJ',
  payload: {
    userId: 'booldook',
    userName: '불뚝',
  },
}); */
