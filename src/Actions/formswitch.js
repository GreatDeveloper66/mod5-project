const FormSwitchAction = formStatus => {
  return {
    type: 'switchForm',
    formStatus: formStatus
  }
}

export default FormSwitchAction
