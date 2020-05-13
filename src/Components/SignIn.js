import React from 'react';
import '../App.css';
import { Form, Col, Button, Row, Container, Card } from 'reactstrap'
import { connect } from 'react-redux'
import LogInUserAction from '../actions/loginuser'
import fetch from 'isomorphic-fetch'
import UserName from './username'
import Password from './password'

let LoginStatus = "Log In Here"
const mapStateToProps = state => {
  return {
    userObj: state.userObj
  }
}


const mapDispatchToProps = dispatch => {
  return {
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
    .then(data => {
		if(data.successfulLogin){
          props.logInUser(data)
          props.history.push('/home')
		}
		else {
			LoginStatus = "Wrong Username or Password"
		}
	  console.log('login', data)
     
    })
}
return (
<Container className="mt-5">
<Row className="d-flex justify-content-center">
  <Col xs={12} sm={8} lg={4}>
<Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
  <h2>Sign In</h2>
  <Form className="form" onSubmit={SignInUser}>
    <UserName username={"username here"}/>
	<Password />
    <Col className="d-flex justify-content-around">
    <Button onClick={() => props.history.push('/Register')}>New User?</Button>
    <Button>Submit</Button>
    </Col>
  </Form>
</Card>
	
  </Col>
</Row>
	<Row className="d-flex justify-content-center">
		<Col xs={12} sm={8} lg={4}>
	<h2>{LoginStatus}</h2>
		</Col>
	</Row>
</Container>
)
}
export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
