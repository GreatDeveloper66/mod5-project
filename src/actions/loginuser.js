const LogInUserAction = (jwt,message) => {
  return {
    type: 'loginuser',
	jwt: jwt,
	message: message 
  }
}

export default LogInUserAction
