import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap'
import SignIn from './Components/SignIn'
import Register from './Components/Register'
import UserRegistrationAction from './actions/useregistration'
import { connect } from 'react-redux'
import thunk from 'redux-thunk'
// import FormSwitchAction from './actions/formswitch'
// import fetch from 'isomorphic-fetch'
// import runtimeEnv from '@mars/heroku-js-runtime-env'

const mapStateToProps = state => {
  return {
    formStatus: state.formStatus,
    userObj: state.userObj
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userRegistration: userObj => {
      dispatch(UserRegistrationAction(userObj))
    }
  }
}

class App extends Component {
  constructor(props){
    super()
  }

  handleRegistration = event => {
    event.preventDefault();
    const email = event.target.email.value
    const username = event.target.username.value
    const password = event.target.password.value
    const userObj = {
      user: {
        username: username,
        email: email,
        password: password
      }
    }
    console.log(this.props)
    this.props.userRegistration(userObj)
  }
  render(){
    return (

    <Container className="App">
    {this.props.formStatus ? <Register handleRegistration={this.handleRegistration} /> : <SignIn />}
    </Container>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
