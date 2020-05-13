const RegisterUserReducer = (state={},action) => {
  switch(action.type){
    case 'registeruser':
      return Object.assign({},state,action.userObj)
    case 'loginuser':
      return Object.assign({},state,action.userObj)
	case 'logoutuser':
      return {}
    default:
      return state
  }
}

export default RegisterUserReducer
