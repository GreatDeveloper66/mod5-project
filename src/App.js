import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Containers/home'
import Profile from './Containers/profile'
import SignIn from './Components/SignIn'
import Register from './Components/Register'
import NewSequence from './Containers/NewSequence'
import EditSequence from './Containers/EditSequence'
import ViewSequence from './Containers/ViewSequence'

// import runtimeEnv from '@mars/heroku-js-runtime-env'


class App extends Component {
  constructor(props){
    super()
  }


  render(){
    return (
 <Container>
    <Router>
      <Switch>
        <Route exact path = '/' component = {SignIn} />
          <Route exact path = '/profile' component={Profile} />
		  <Route exact path ='/Register' component={Register} />
          <Route exact path='/home' component={Home} />
		  <Route exact path='/sequences/new' component={NewSequence} />
		  <Route exact path='/sequences/edit' component={EditSequence} />
		  <Route exact path='/sequence/view' component={ViewSequence } />
        </Switch>
    </Router>
	</Container>
    )
  }
}

export default App
