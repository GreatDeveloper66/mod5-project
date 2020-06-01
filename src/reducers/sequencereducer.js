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
		const pos = action.asana_id
		return {...state,asanas:[...state.asanas.slice(0,pos),...state.asanas.slice(pos  + 1)]}
		
	case 'clearsequence':
		return {}
	case 'logoutuser':
		return {}
	case 'moveasanaup':
		const temparray = state.asanas.slice(0)
		const id = action.asana_id
		if(id === null){
			return state
		}
		const temp = temparray[id]
		temparray[id] = temparray[id + 1]
		temparray[id + 1] = temp
		return {...state,asanas:temparray}
	case 'moveasanadown':
		const temparr = state.asanas.slice(0)
		const asanaid = action.asana_id
		if(asanaid === null){
			return state
		}
		const tempval = temparr[asanaid]
		temparr[asanaid] = temparr[asanaid - 1]
		temparr[asanaid - 1] = tempval
		return {...state,asanas:temparr}
    default:
      return state
  }
}

export default SequenceReducer

