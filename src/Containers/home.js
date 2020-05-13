import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import LogOutUserAction from '../actions/logoutuser'
import RenderProfileAction from '../actions/renderprofile'

const mapStateToProps = state => {
  return {
    userObj: state.userObj
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
    const jwt = this.props.userObj.jwt
    
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
      <div>Home Page</div>
      <button onClick={this.handleSignOut}>Sign Out</button>
      <button onClick={this.handleProfile}>Profile</button>
      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
