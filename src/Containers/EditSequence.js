import React, { Component } from 'react';
import '../App.css';
import AsanaCarousel from '../Components/AsanaCarousel'
import NavBar from '../Components/NavBar'

class EditSequence extends Component {
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

export default EditSequence