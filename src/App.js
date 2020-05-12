import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap'
import SignIn from './Components/SignIn'
import Register from './Components/Register'
import { connect } from 'react-redux'
import RegisterUserAction from './actions/registeruser'
import fetch from 'isomorphic-fetch'
// import runtimeEnv from '@mars/heroku-js-runtime-env'

const mapStateToProps = state => {
  return {
    formStatus: state.formStatus
  }
}

const mapDispatchToProps = dispatch => {
  return {
    registerUser: userObj => {
      dispatch(RegisterUserAction(userObj))
    }
  }
}



class App extends Component {
  constructor(props){
    super()
  }

  handleRegistration = event => {
    event.preventDefault();
    // const host = runtimeEnv().REACT_APP_API_URL
    const host = `http://localhost:5000`
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
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userObj)
    }
    fetch(`${host}/api/v1/users`,configObj)
      .then(resp => resp.json())
      .then(data => {
          console.log('datauser',data.userObj)
          console.log('registerUser', this.props.registerUser)

          this.props.registerUser(data.userObj)
        })
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
