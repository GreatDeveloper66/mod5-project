const FormSwitchReducer = (state=false,action) => {
  switch(action.type){
    case 'switchForm':
      return action.formStatus
    default:
      return state
  }
}

export default FormSwitchReducer
