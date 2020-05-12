const LogInUserAction = userObj => {
  return {
    type: 'loginuser',
    userObj: userObj
  }
}

export default LogInUserAction
