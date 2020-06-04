import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { Container, Row, Button, ButtonGroup } from 'reactstrap'
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
  
  handleSignOut = () => {
	this.props.logOutUser() 
  	this.props.history.push('/')
  }
  
 
 
  

	render(){
		return(
			
			<Container>
				<Row className="d-flex justify-content-end align-items-start">
					<ButtonGroup>
						<Button color="primary" onClick={() => this.props.history.push('/home')}>Home</Button>		
						<Button color="success" onClick={() => this.props.history.push('/profile')}>Profile</Button>
						<Button color="info" onClick={this.handleSignOut}>Sign Out</Button>
					</ButtonGroup>
				</Row>
		</Container>
		)
	}
}

export default withRouter(connect(null,mapDispatchToProps)(NavBar))