import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { Container, Row, Button } from 'reactstrap'
import LogOutUserAction from '../actions/logoutuser'
import { withRouter } from 'react-router-dom'

const mapDispatchToProps = dispatch => {
	return {
		logOutUser: () => {
			dispatch(LogOutUserAction())
		}
	}
}

class NavBar extends Component {
	constructor(props){
		super()
	}
  
  handleSignOut = () => {
	this.props.logOutUser() 
  	this.props.history.push('/')
  }

	render(){
		return(
			<Container>
				<Row className="d-flex justify-content-end align-items-start">
					<Button color="warning" onClick={this.handleSignOut}>Sign Out</Button>
					<Button color="success" onClick={() => this.props.history.push('/profile')}>Profile</Button>
				</Row>
		</Container>
		)
	}
}

export default withRouter(connect(null,mapDispatchToProps)(NavBar))