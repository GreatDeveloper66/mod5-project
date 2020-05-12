import React from 'react';
import '../App.css';
import { FormGroup, Form, Col, Label, Input, Button, Row } from 'reactstrap'
import { connect } from 'react-redux'
import FormSwitchAction from '../actions/formswitch'
import fetch from 'isomorphic-fetch'



const mapDispatchToProps = dispatch => {
  return {
    switchForm: formStatus => {
      dispatch(FormSwitchAction(formStatus))
    }
  }
}

const SignIn = props => {

const SignInUser = event => {
  event.preventDefault()
  const username = event.target.username.value
  const password = event.target.password.value
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
      "Accept": "application/json"
    },
    body: JSON.stringify(userObj)
  }
  fetch('http://localhost:5000/api/v1/login', configObj)
    .then(resp => resp.json())
    .then(data => console.log('login', data))
}
return (
<Row className="d-flex justify-content-center">
  <Col xs={12} sm={8} lg={4}>
  <h2>Sign In</h2>
  <Form className="form" onSubmit={SignInUser}>
    <Col>
      <FormGroup>
        <Label>Username</Label>
        <Input
          type="text"
          name="username"
          id="exampleUserName"
          placeholder="username"
        />
      </FormGroup>
    </Col>
    <Col>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          placeholder="********"
        />
      </FormGroup>
    </Col>
    <Col className="d-flex justify-content-around">
    <Button onClick={() => props.switchForm(true)}>New User?</Button>
    <Button>Submit</Button>

    </Col>
  </Form>
  </Col>
</Row>
)
}
export default connect(null,mapDispatchToProps)(SignIn)
