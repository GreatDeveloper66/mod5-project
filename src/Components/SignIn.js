import React from 'react';
import '../App.css';
import { FormGroup, Form, Col, Label, Input, Button, Row } from 'reactstrap'
import { connect } from 'react-redux'
import FormSwitchAction from '../actions/formswitch'



const mapDispatchToProps = dispatch => {
  return {
    switchForm: formStatus => {
      dispatch(FormSwitchAction(formStatus))
    }
  }
}

const SignIn = () =>
<Row className="d-flex justify-content-center">
  <Col xs={12} sm={8} lg={4}>
  <h2>Sign In</h2>
  <Form className="form">
    <Col>
      <FormGroup>
        <Label>Username</Label>
        <Input
          type="text"
          name="name"
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
    <Button>New User?</Button>
    <Button>Submit</Button>
    </Col>
  </Form>
  </Col>
</Row>

export default connect(null,mapDispatchToProps)(SignIn)
