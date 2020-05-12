import React from 'react';
import SignIn from '../Components/SignIn'
import Register from '../Components/Register'
import { connect } from 'react-redux'
import '../App.css';


const mapStateToProps = state => {
  return {
    formStatus: state.formStatus
  }
}

const Root = props => props.formStatus ?
                      <Register handleRegistration={props.handleRegistration} /> :
                      <SignIn />

export default connect(mapStateToProps,null)(Root);
