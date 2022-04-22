const initState = []

const commentReducer = (prevState = initState, action) => {
  switch(action.type) {
    case 'COMMENT_ADD':
      return [...prevState, action.payload]
    case 'COMMENT_REMOVE':
      return prevState.filter(comment => comment.idx !== action.payload)
    default:
      return prevState
  }
}

export default commentReducer;