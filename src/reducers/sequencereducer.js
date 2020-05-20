const SequenceReducer = (state=[],action) => {
  switch(action.type){
    case 'loadsequence':
      return action.sequence
	case 'addasana':
		return Object.assign({},state,{asanas: [...state.asanas,action.asana]})
	case 'undoasana':
		return Object.assign({},state,{asanas: state.asanas.slice(0,-1)})
	case 'clearsequence':
		return []
	case 'logoutuser':
		return []
    default:
      return state
  }
}

export default SequenceReducer

