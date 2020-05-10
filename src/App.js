import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap'
import SignIn from './Components/SignIn'
import Register from './Components/Register'
import { connect } from 'react-redux'
import FormSwitchAction from './actions/formswitch'
// import fetch from 'isomorphic-fetch'
// import runtimeEnv from '@mars/heroku-js-runtime-env'

const mapStateToProps = state => {
  return {
    formStatus: state.formStatus
  }
}



class App extends Component {
  constructor(props){
    super()
  }
  render(){
    return (

    <Container className="App">
    {this.props.formStatus ? <Register /> : <SignIn />}
    </Container>
    )
  }
}

export default connect(mapStateToProps,null)(App);
