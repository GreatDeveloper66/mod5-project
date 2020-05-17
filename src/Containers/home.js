import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import LogOutUserAction from '../actions/logoutuser'
import RenderProfileAction from '../actions/renderprofile'
import { Navbar, Row, Container, Button } from 'reactstrap'

const mapStateToProps = state => {
  return {
    jwt: state.jwt
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

class Home extends Component {
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
      <div>
      <Container>
		<Row className="d-flex justify-content-end">
			<Button color="primary" onClick={this.handleSignOut}>Sign Out</Button>
			<Button color="primary" onClick={this.handleProfile}>Profile</Button>
		</Row>
	  </Container>
      <Container className="mt-4">
		<Row className="d-flex justify-content-center align-items-center">
			<Button color="success" size="lg">Create New Sequence</Button>
		</Row>
	  </Container>
	  
	 
      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
