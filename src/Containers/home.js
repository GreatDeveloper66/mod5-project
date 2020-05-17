import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import LogOutUserAction from '../actions/logoutuser'
import RenderProfileAction from '../actions/renderprofile'
import { Navbar } from 'reactstrap'

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
      <Navbar>
      <button onClick={this.handleSignOut}>Sign Out</button>
      <button onClick={this.handleProfile}>Profile</button>
	  </Navbar>
	  <button className="success" bsSize="large">
	  Create New Sequence
	  </button>
      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
