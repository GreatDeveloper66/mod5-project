const RegisterUserAction = jwt => {
  return {
    type: 'registeruser',
	jwt: jwt
  }
}

export default RegisterUserAction
