const RegisterUserReducer = (state={},action) => {
  console.log('state',state)
  console.log('action',action)
  switch(action.type){
    case 'registeruser':
      return Object.assign({},state,{userObj: action.userObj})
    default:
      return state
  }
}

export default RegisterUserReducer
