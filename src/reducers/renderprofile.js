const RenderProfileReducer = (state={},action) => {
  switch(action.type){
    case 'renderprofile':
      return Object.assign({},state,action.profile)
    default:
      return state
  }
}

export default RenderProfileReducer