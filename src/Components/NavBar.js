import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { Container, Row, Button } from 'reactstrap'
import LogOutUserAction from '../actions/logoutuser'
import RenderProfileAction from '../actions/renderprofile'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
  return {
    jwt: state.jwt,
	loginmessage: state.loginmessage
  }
}


const mapDispatchToProps = dispatch => {
	return {
		logOutUser: () => {
			dispatch(LogOutUserAction())
		},
		renderProfile: profile => {
			dispatch(RenderProfileAction(profile))
		}
	}
}

class NavBar extends Component {
	constructor(props){
		super()
	}
	
	handleProfile = () => {
		const jwt = this.props.jwt
		fetch('http://localhost:5000/api/v1/profile', {
		headers: { Authorization: `Bearer ${jwt}`}
		})
		.then(response => response.json())
		.then(data => {
			this.props.renderProfile(data)
			this.props.history.push('/profile')
		})
    
	}
  
  handleSignOut = () => {
	this.props.logOutUser() 
  	this.props.history.push('/')
  }

	render(){
		return(
			<Container>
				<Row className="d-flex justify-content-end">
					<Button color="primary" onClick={this.handleSignOut}>Sign Out</Button>
					<Button color="primary" onClick={this.handleProfile}>Profile</Button>
				</Row>
		</Container>
		)
	}
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NavBar))