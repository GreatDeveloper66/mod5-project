import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap'
import SignIn from './Components/SignIn'
import Register from './Components/Register'
import { connect } from 'react-redux'
import RegisterUserAction from './actions/registeruser'
import fetch from 'isomorphic-fetch'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Root from './Containers/root'
import Home from './Containers/home'
// import runtimeEnv from '@mars/heroku-js-runtime-env'


class App extends Component {
  constructor(props){
    super()
  }


  render(){
    return (
    <Router>
      <Switch>
        <Route
          exact path='/'
          component = {Root}
          />
          <Route exact path='/home' component={Home} />
        </Switch>
    <Container className="App">
    {/*<Root handleRegistration={this.handleRegistration} />*/}
    </Container>
    </Router>
    )
  }
}

export default App
