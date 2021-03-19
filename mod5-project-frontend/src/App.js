import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Containers/home'
import Profile from './Containers/profile'
import SignIn from './Components/SignIn'
import Register from './Components/Register'
import NewSequence from './Containers/NewSequence'
import EditSequence from './Containers/EditSequence'
import ViewSequence from './Containers/ViewSequence'
import YogaWorkoutScreen from './Containers/YogaWorkoutScreen'


class App extends Component {
  constructor(props){
    super()
  }


  render(){
    return (

    <Router>
      <Switch>
        <Route exact path='/' component = {SignIn} />
        <Route exact path='/profile' component={Profile} />
		    <Route exact path ='/Register' component={Register} />
        <Route exact path='/home' component={Home} />
		    <Route exact path='/sequences/new' component={NewSequence} />
		    <Route exact path='/sequences/edit' component={EditSequence} />
		    <Route exact path='/sequences/view' component={ViewSequence} />
		    <Route exact path='/sequences/presets' component={YogaWorkoutScreen} />
      </Switch>
    </Router>
	
    )
  }
}

export default App
