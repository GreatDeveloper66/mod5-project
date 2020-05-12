import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    userObj: state.userObj
  }
}

class Home extends Component {
  constructor(props){
    super()
  }


  handleProfile = () => {
    const jwt = this.props.userObj.jwt
    const header = {
      Authorization: `Bearer ${jwt}`
    }
    console.log(JSON.stringify(header))
    
    fetch('http://localhost:5000/api/v1/profile', {
      headers: { Authorization: `Bearer ${jwt}`}
    })
    .then(response => response.json())
    .then(data => console.log(data))
    this.props.history.push('/profile')
  }

  render(){
    return(
      <div>
      <div>Home Page</div>
      <button>Sign Out</button>
      <button onClick={this.handleProfile}>Profile</button>
      </div>
    )
  }
}

export default connect(mapStateToProps,null)(Home)
