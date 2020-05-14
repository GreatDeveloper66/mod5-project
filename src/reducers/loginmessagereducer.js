const LogInMessageReducer = (state='',action) => {
  switch(action.type){
    case 'loginuser':
        return action.message
    default:
      return state
  }
}

export default LogInMessageReducer
