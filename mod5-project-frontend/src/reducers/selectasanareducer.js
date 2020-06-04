const SelectedAsanaReducer = (state=null,action) => {
  switch(action.type){
    case 'selectasana':
      return action.selectedasanaid
	case 'moveasanaup':
		return action.asana_id + 1
	case 'moveasanadown':
		return action.asana_id === 0 ? 0 : action.asana_id - 1
	case 'clearselectedasana':
		return null
    default:
      return state
  }
}

export default SelectedAsanaReducer