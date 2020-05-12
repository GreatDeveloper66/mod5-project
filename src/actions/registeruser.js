const RegisterUserAction = userObj => {
  return {
    type: 'registeruser',
    userObj: userObj
  }
}

export default RegisterUserAction
