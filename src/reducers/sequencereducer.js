const SequenceReducer = (state={},action) => {
  switch(action.type){
    case 'loadsequence':
      return action.sequence
	case 'addasana':
		if(state.asanas){
			return {...state,asanas:[...state.asanas,action.asana]}
		}
		else {
			return {id:null,name:'',asanas:[action.asana]}
		}
	case 'undoasana':
		return {...state,asanas:[...state.asanas.slice(0.,-1)]}
	case 'removeasana':
		const foundid = state.asanas.findIndex(asana => asana.id === action.asana_id)
		return {...state,asanas:[...state.asanas.slice(0,foundid),...state.asanas.slice(foundid  + 1)]}
	case 'clearsequence':
		return {}
	case 'logoutuser':
		return {}
    default:
      return state
  }
}

export default SequenceReducer

