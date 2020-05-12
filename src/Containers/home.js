import React, { Component } from 'react';
import '../App.css';
class Home extends Component {
  constructor(props){
    super()
  }

  handleProfile = () => {

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

export default Home
