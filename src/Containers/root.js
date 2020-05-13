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
                      <Register history={props.history}/> :
                      <SignIn history={props.history}/>

export default connect(mapStateToProps,null)(Root);
