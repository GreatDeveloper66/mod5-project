import React, { Component } from 'react';
import '../App.css';
import AsanaCarousel from '../Components/AsanaCarousel'
import NavBar from '../Components/NavBar'
import CountDownClock from '../Components/CountDownClock'



class ViewSequence extends Component {
	constructor(props){
		super()
	}
	render(){
		return(
			<div>
			<NavBar />
			<AsanaCarousel />
			
			<CountDownClock />
			
		</div>
		)
	}
}

export default ViewSequence