import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap'
import SignIn from './Components/SignIn'

class App extends Component {
  constructor(props){
    super()
  }
  render(){
    return (
      <Container className="App">
      <SignIn />
    </Container>
    )
  }
}

export default App;
