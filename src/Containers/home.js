import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import LogOutUserAction from '../actions/logoutuser'
import RenderProfileAction from '../actions/renderprofile'
import { Navbar, Row, Container, Button } from 'reactstrap'
import NavBar from '../Components/NavBar'

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
	<Container>
      <NavBar />
      <Container className="mt-4">
		<Row className="d-flex justify-content-center align-items-center">
			<Button color="success" size="lg" onClick={() => this.props.history.push('/sequences/new')}>Create New Sequence</Button>
		</Row>
	  </Container>
	  
	 
      </Container>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
