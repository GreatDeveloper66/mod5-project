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
import RenderProfileAction from '../actions/renderprofile'

const URL = process.env.REACT_APP_API_URL

const mapStateToProps = state => {
  return {
    jwt: state.jwt,
	loginmessage: state.loginmessage,
	profile: state.profile
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
    },
	renderprofile: profile => {
			dispatch(RenderProfileAction(profile))
	}
  }
}

class SignIn extends Component {
	constructor(props){
		super()
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
	fetch(`${URL}/api/v1/login`, configObj)
		.then(resp => resp.json())
		.then(data => {
			if(data.successfulLogin){
			this.props.logInUser(data.jwt, '')
			this.props.renderprofile({user: {id: data.user.id,email: data.user.email,username: data.user.username}})
			fetch(`${URL}/api/v1/users/${this.props.profile.user.id}/sequences`,{headers: {Authorization: `Bearer ${this.props.jwt}`}})
				.then(resp => resp.json())
				.then(data => {
					this.props.loadusersequences(data)
          this.props.fetchcategories(this.props.jwt)
          /*
					fetch(`${URL}/api/v1/categories`,{headers: {Authorization: `Bearer ${this.props.jwt}`}})
						.then(resp => resp.json())
						.then(data => {
							this.props.loadcategories(data)
					})
          */
					this.props.history.push('/home')
				})

			}
			else {
				this.props.logInUser('','Incorrect UserName and/or Password. Try Again')
			}
    })
}


componentDidMount() {


	}

render(){
	return (

	<div style={this.bannerStyle()} className="d-flex justify-content-center align-items-center">
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
</div>

)
}
}
export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
