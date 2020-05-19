const SequenceReducer = (state=[],action) => {
  switch(action.type){
    case 'loadsequence':
      return action.sequence
	case 'addasana':
		return [...state,action.asana]
    default:
      return state
  }
}

export default SequenceReducer

