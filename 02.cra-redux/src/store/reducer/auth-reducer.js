const initState = {
  isLogging: false,
  user: {
    idx: '',
    userId: '',
    userName: '',
    email: '',
  },
}

const authReducer = (prevState = initState, action) => {
  switch(action.type) {
    case 'LOGIN_PENDING':
      return {
        ...prevState,
      }
    case 'LOGIN_FULFILLED':
      console.log(action.payload)
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
    default:
      return prevState
  }
}

export default authReducer;