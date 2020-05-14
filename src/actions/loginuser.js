const LogInUserAction = jwt => {
  return {
    type: 'loginuser',
	 jwt: jwt
  }
}

export default LogInUserAction
