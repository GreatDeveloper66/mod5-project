const SequenceReducer = (state=[],action) => {
  switch(action.type){
    case 'loadsequence':
      return action.sequence
	case 'addasana':
		return [...state,action.sequence]
    default:
      return state
  }
}

export default SequenceReducer

