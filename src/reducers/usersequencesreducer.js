const UserSequencesReducer = (state=[],action) => {
  switch(action.type){
    case 'loadsequences':
      return action.sequences
	case 'addsequence':
	  return [...state,action.sequence]
    default:
      return state
  }
}

export default UserSequencesReducer
