import React, { Component } from 'react';
import '../App.css';
import AsanaCarousel from '../Components/AsanaCarousel'
import NavBar from '../Components/NavBar'







class NewSequence extends Component {
	constructor(props){
		super()
	}
	render(){
		return(
		<div>
			<NavBar />
			<AsanaCarousel />
			<footer>Footer</footer>
		</div>
		)
	}
}

export default NewSequence