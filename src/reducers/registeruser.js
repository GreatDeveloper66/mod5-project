const RegisterUserReducer = (state='',action) => {
  switch(action.type){
    case 'registeruser':
		return action.jwt
    case 'loginuser':
        return action.jwt
	case 'logoutuser':
      return ''
    default:
      return state
  }
}

export default RegisterUserReducer
