const UserSequencesReducer = (state=[],action) => {
  switch(action.type){
    case 'loadsequences':
      return action.sequences
	case 'addsequence':
	  const name = action.sequence.name
	  const asanas = action.sequence.asanas
	  const foundsequence = state.find(sequence => sequence.name === name)
	  if(foundsequence){
		  return [...state, {id:foundsequence.id,name:name,asanas: asanas}]
	  }
	  else {
		  action.sequence.id = 101+ state.length
		  return [...state,action.sequence]
	  }
    default:
      return state
  }
}

export default UserSequencesReducer
