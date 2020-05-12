import React, { Component } from 'react';
import '../App.css';
class Home extends Component {
  constructor(props){
    super()
  }


  render(){
    return(
      <div>
      <div>Home Page</div>
      <button>Sign Out</button>
      <button onClick={() => this.props.history.push('/profile')}>Profile</button>
      </div>
    )
  }
}

export default Home
