const formSwitchReducer = (state,action) => {
  switch(action.type){
    case 'switchForm':
      return action.trueorfalse
    default:
      return state
  }
}
