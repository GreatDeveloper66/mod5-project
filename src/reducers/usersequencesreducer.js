const UserSequencesReducer = (state=[],action) => {
  switch(action.type){
    case 'loadsequences':
      return action.sequences
	case 'addsequence':
	  
	  /*const { id, name, asanas } = action.sequence*/
	  return[...state.filter(sequence => sequence.id !== action.sequence.id), action.sequence]
/*	  
	  const foundsequence = asanas.find(sequence => sequence.id === id)
	  if(foundsequence){
		  return [...state.filter(sequence => sequence.id !== foundsequence.id), {id:id,name:name,asanas: asanas}]
	  }
	  else {
		  return [...state,action.sequence]
	  }
	  */
	case 'deletesequence':
		return [...state.filter(sequence => sequence.id !== action.sequenceid)]
	case 'logoutuser':
		return []
    default:
      return state
  }
}

export default UserSequencesReducer
