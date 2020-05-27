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
		return {...state,asanas:[...state.asanas.slice(0,-1)]}
	case 'removeasana':
		const foundid = state.asanas.findIndex(asana => asana.id === action.asana_id)
		return {...state,asanas:[...state.asanas.slice(0,foundid),...state.asanas.slice(foundid  + 1)]}
	case 'clearsequence':
		return {}
	case 'logoutuser':
		return {}
	case 'moveasanaup':
		const found_id = state.asanas.findIndex(asana => asana.id === action.asana_id)
		const temparray = state.asanas.slice(0)
		const temp = temparray[found_id]
		temparray[found_id] = temparray[found_id + 1]
		temparray[found_id + 1] = temp
		return {...state,asanas:temparray}
	case 'moveasanadown':
		const find_id = state.asanas.findIndex(asana => asana.id === action.asana_id)
		const temparr = state.asanas.slice(0)
		const tempval = temparr[find_id]
		temparr[find_id] = temparr[find_id - 1]
		temparr[find_id - 1] = tempval
		return {...state,asanas:temparr}
    default:
      return state
  }
}

export default SequenceReducer

