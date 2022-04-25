import produce from 'immer';

const initState = {
  isAuthLoading: false,
  isLogging: false,
  user: {},
}

const authReducer = produce((draft, action) => {
  switch(action.type) {
    case 'LOGIN_PENDING':
      draft.isAuthLoading = true;
      break;
    case 'LOGIN_FULFILLED':
      draft.isAuthLoading = false;
      draft.isLogging = true;
      draft.user = action.payload.user;
      break;
    case 'LOGIN_REJECTED':
      draft.isAuthLoading = false;
      draft.isLogging = false;
      break;
    case 'LOGOUT':
      draft.isAuthLoading = false;
      draft.isLogging = false;
      draft.user = {}
      break;
    default:
      return initState;
  }
});

export default authReducer;