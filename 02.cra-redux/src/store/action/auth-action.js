import axios from 'axios';


// pending: 요청상태
// fulfilled: 정상응답
// rejected: 에러응답
// 동기
const actionLogInPending = () => {
  return {
    type: 'LOGIN_PENDING',
  }
}

const actionLogInFulfilled = (user) => {
  return {
    type: 'LOGIN_FULFILLED',
    payload: {
      isLogging: true,
      user
    }
  }
}

const actionLogInRejected = (err) => {
  return {
    type: 'LOGIN_REJECTED',
    payload: err
  }
}

const logIn = (userName) => {
  return async (dispatch, getState) => {
    try {
      dispatch(actionLogInPending()); // 기달려(pending)
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users?username=' + userName)
      dispatch(actionLogInFulfilled(data[0]));

      /* setTimeout(() => {
        dispatch(actionLogInFulfilled(userId)); // 줄께(fulfilled)
      }, 3000) */
    }
    catch (err) {
      console.log(err);
      dispatch(actionLogInRejected(err)); // 에러야(rejected)
    }
  }
}

// 동기
const logOut = () => {
  return {
    type: 'LOGOUT',
    payload: {
      isLogging: false,
      user: {}
    }
  }
}

export { logIn, logOut };