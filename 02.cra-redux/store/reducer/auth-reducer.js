const initState = {
  isLogging: false,
  user: {
    idx: '',
    userId: '',
    userName: '',
    email: '',
  },
  token: {}
}

const authReducer = (prevState = initState, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        ...prevState,
        isLogging: true,
        user: action.payload.user,
        token: action.payload.token,
      }
    case 'LOGOUT':
    default:
      return prevState
  }
}

export default authReducer;