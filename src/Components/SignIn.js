import React from 'react';
import '../App.css';
import { Form, Col, Button, Row } from 'reactstrap'
import { connect } from 'react-redux'
import FormSwitchAction from '../actions/formswitch'
import LogInUserAction from '../actions/loginuser'
import fetch from 'isomorphic-fetch'
import BottomForm from './bottomform'


const mapStateToProps = state => {
  return {
    userObj: state.userObj
  }
}


const mapDispatchToProps = dispatch => {
  return {
    switchForm: formStatus => {
      dispatch(FormSwitchAction(formStatus))
    },
    logInUser: userObj => {
      dispatch(LogInUserAction(userObj))
    }
  }
}

const SignIn = props => {

const SignInUser = event => {
  event.preventDefault()
  const username = event.target.username.value
  const password = event.target.password.value
  const jwt = props.userObj.jwt
  const userObj = {
    user: {
      username: username,
      password: password
    }
  }
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      Authorization: jwt
    },
    body: JSON.stringify(userObj)
  }
  fetch('http://localhost:5000/api/v1/login', configObj)
    .then(resp => resp.json())
    .then(data => {
      props.logInUser(data)
      props.history.push('/home')
    })
}
return (
<Row className="d-flex justify-content-center">
  <Col xs={12} sm={8} lg={4}>
  <h2>Sign In</h2>
  <Form className="form" onSubmit={SignInUser}>
    <BottomForm />
    <Col className="d-flex justify-content-around">
    <Button onClick={() => props.switchForm(true)}>New User?</Button>
    <Button>Submit</Button>
    </Col>
  </Form>
  </Col>
</Row>
)
}
export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
