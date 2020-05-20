import React, { Component } from 'react';
import '../App.css';
import { Form, Col, Button, Row, Container, Card, Alert} from 'reactstrap'
import { connect } from 'react-redux'
import LogInUserAction from '../actions/loginuser'
import LoadUserSequencesAction from '../actions/loadusersequences'
import LoadCategoriesAction from '../actions/loadcategories'
import fetch from 'isomorphic-fetch'
import UserName from './username'
import Password from './password'
import sequences from '../json/sequences.json'


const mapStateToProps = state => {
  return {
    jwt: state.jwt,
	loginmessage: state.loginmessage
  }
}


const mapDispatchToProps = dispatch => {
  return {
    logInUser: (jwt,message) => {
      dispatch(LogInUserAction(jwt,message))
    },
	loadusersequences: sequences => {
		dispatch(LoadUserSequencesAction(sequences))
	},
	loadcategories: categories => {
      dispatch(LoadCategoriesAction(categories))
    }
  }
}

class SignIn extends Component {
	constructor(props){
		super()
	}
	
	
	handleRegisterSwitch = () => {
		this.props.logInUser(this.props.jwt,'')
		this.props.history.push('/Register')
	}

	SignInUser = event => {
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
			this.props.logInUser(data.jwt, '')
			this.props.loadusersequences(sequences)
			this.props.history.push('/home')
			}
			else {
				this.props.logInUser('','Incorrect UserName and/or Password. Try Again')
			}
    })
}

render(){
	return (
	<Container className="mt-5">
	<Row className="d-flex justify-content-center">
	<Col xs={12} sm={8} lg={4}>
	<Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
		<h2>Sign In</h2>
	<Form className="form" onSubmit={this.SignInUser}>
		<UserName username={"username here"}/>
		<Password />
		<Col className="d-flex justify-content-around">
			<Button onClick={this.handleRegisterSwitch}>New User?</Button>
			<Button>Submit</Button>
		</Col>
	</Form>
	</Card>	
  </Col>
</Row>
<Row className="d-flex justify-content-center">
	<Col xs={12} sm={8} lg={4}>
		{this.props.loginmessage ? <Alert color="danger">{this.props.loginmessage}</Alert> : ''}
	</Col>
</Row>
</Container>
)
}
}
export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
