import React, { Component } from 'react';
import '../App.css';
import { Form, Col, Button, Row, Container, Card, Alert } from 'reactstrap'
import { connect } from 'react-redux'
import RegisterUserAction from '../actions/registeruser'
import Email from './email'
import UserName from './username'
import ConfirmPassword from './ConfirmPassword'
import fetch from 'isomorphic-fetch'
import RenderProfileAction from '../actions/renderprofile'

const mapStateToProps = state => {
  return {
    jwt: state.jwt,
	loginmessage: state.loginmessage,
	profile: state.profile
  }
}

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
class Register extends Component {
	
	constructor(props){
		super(props)
		this.state = {
			registerMessage: ''
		}
	}
	
 handleRegistration = event => {
    event.preventDefault();
    // const host = runtimeEnv().REACT_APP_API_URL
    const email = event.target.email.value
    const username = event.target.username.value
    const password = event.target.password.value
	const confirmpassword = event.target.confirmpassword.value
	if(password !== confirmpassword){
		this.setState({registerMessage: 'Second password is not the same as first. Try again.'})
		return
	}
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
          this.props.registerUser(data.jwt)
		  this.props.renderprofile({user: {id: data.user.id,email: data.user.email,username: data.user.username}})
		  this.props.history.push('/home')
        })
				fetch(`${URL}/api/v1/categories`,{headers: {Authorization: `Bearer ${this.props.jwt}`}})
						.then(resp => resp.json())
						.then(data => {
							this.props.loadcategories(data)
					})
  }

	bannerStyle = () => ({
		backgroundImage: `url(${require(`../images/Yogi_Background_C.jpg`)})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		height: '100vh',
		width: '100vw',
		overflowY: 'hidden'
	})
	


	render(){
		return (
		<div style={this.bannerStyle()} className="d-flex justify-content-center align-items-center">
			<Container className="mt-5">
			<Row className="d-flex justify-content-center mt-5">
				<Col xs={12} sm={8} lg={4}>
				<Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
				<h2>Register</h2>
			<Form className="form" onSubmit={this.handleRegistration}>
				<Email email={"email@email.com"}/>
			<UserName username={"username here"}/>
				<ConfirmPassword />
				<Col className="d-flex justify-content-around">
				<Button onClick={() => this.props.history.push('/')}>Already Registered?</Button>
				<Button type="submit">Submit</Button>
				</Col>
			</Form>
		</Card>
		</Col>
		</Row>
		<Row className="d-flex justify-content-center">
			<Col xs={12} sm={8} lg={4}>
				{this.state.registerMessage ? <Alert color="danger">{this.state.registerMessage}</Alert> : ''}
			</Col>
		</Row>
		</Container>
		</div>
		)
		
		
		
	}
  
}

export default connect(mapStateToProps,mapDispatchToProps)(Register)
