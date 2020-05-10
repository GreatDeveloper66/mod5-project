const FormSwitchReducer = (state=false,action) => {
  switch(action.type){
    case 'switchForm':
      return Object.assign({},state,{formStatus: action.formStatus})
    default:
      return state
  }
}

export default FormSwitchReducer
