const RenderProfileReducer = (state={},action) => {
  switch(action.type){
    case 'renderprofile':
      return Object.assign({},state,action.profile)
	case 'logoutuser':
		return {}
    default:
      return state
  }
}

export default RenderProfileReducer