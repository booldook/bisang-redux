const initState = {
  isLogging: false,
  user: {},
}

const authReducer = (prevState = initState, action) => {
  switch(action.type) {
    case 'LOGIN_PENDING':
      return {
        ...prevState,
      }
    case 'LOGIN_FULFILLED':
      return {
        ...prevState,
        isLogging: true,
        user: action.payload.user,
      }
    case 'LOGIN_REJECTED':
      return {
        ...prevState,
        isLogging: false,
        user: {},
      }
    case 'LOGOUT':
      return {
        ...prevState,
        isLogging: action.payload.isLogging,
        user: action.payload.user,
      }
    default:
      return prevState
  }
}

export default authReducer;