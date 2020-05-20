const SequenceReducer = (state=[],action) => {
  switch(action.type){
    case 'loadsequence':
      return action.sequence
	case 'addasana':
		return [...state,action.asana]
	case 'undoasana':
		return state.slice(0,-1)
	case 'clearsequence':
		return []
    default:
      return state
  }
}

export default SequenceReducer

