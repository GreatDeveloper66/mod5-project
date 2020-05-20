import React from 'react';
import '../App.css';
import { Form, Col, Button, Row, Container, Card } from 'reactstrap'
import { connect } from 'react-redux'
import RegisterUserAction from '../actions/registeruser'
import Email from './email'
import UserName from './username'
import Password from './password'
import fetch from 'isomorphic-fetch'
import RenderProfileAction from '../actions/renderprofile'


const mapDispatchToProps = dispatch => {
  return {
    registerUser: jwt => {
      dispatch(RegisterUserAction(jwt))
    },
	renderprofile: profile => {
			dispatch(RenderProfileAction(profile))
	}
  }
}

const Register = props => {
  const handleRegistration = event => {
    event.preventDefault();
    // const host = runtimeEnv().REACT_APP_API_URL
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
    fetch(`http://localhost:5000/api/v1/users`,configObj)
      .then(resp => resp.json())
      .then(data => {
          props.registerUser(data.jwt)
		  props.renderprofile({user: {id: data.user.id,email: data.user.email,username: data.user.username}})
		  props.history.push('/home')
        })
  }




  return (
<Container className="mt-5">
   <Row className="d-flex justify-content-center mt-5">
     <Col xs={12} sm={8} lg={4}>
	  <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <h2>Register</h2>
       <Form className="form" onSubmit={handleRegistration}>
       <Email email={"email@email.com"}/>
    <UserName username={"username here"}/>
	<Password />
    <Col className="d-flex justify-content-around">
      <Button onClick={() => props.history.push('/')}>Already Registered?</Button>
      <Button type="submit">Submit</Button>
      </Col>
  </Form>
	  </Card>
  </Col>
</Row>
</Container>
)
}

export default connect(null,mapDispatchToProps)(Register)
