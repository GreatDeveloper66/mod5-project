const UserSequencesReducer = (state=[],action) => {
  switch(action.type){
    case 'loadsequences':
      return action.sequences
    default:
      return state
  }
}

export default UserSequencesReducer
