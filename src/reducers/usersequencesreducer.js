const UserSequencesReducer = (state=[],action) => {
  switch(action.type){
    case 'loadsequences':
      return action.sequences
	case 'addsequence':
	  const name = action.sequence.name
	  const foundsequence = state.find(sequence => sequence.name === name)
	  if(foundsequence){
		  return [...state.filter(sequence => sequence.id !== foundsequence.id), {id:foundsequence.id,name:name,asanas: action.sequence.asanas}]
	  }
	  else {
		  action.sequence.id = 101+ state.length
		  return [...state,action.sequence]
	  }
	case 'deletesequence':
		const foundid = state.find(sequence => sequence.name === action.sequencename).id
		return [...state.filter(sequence => sequence.id !== foundid)]
    default:
      return state
  }
}

export default UserSequencesReducer
