import React, { Component } from 'react';
import '../App.css';
import AsanaCarousel from '../Components/AsanaCarousel'
import NavBar from '../Components/NavBar'


class ViewSequence extends Component {
	constructor(props){
		super()
	}
	render(){
		return(
			<div>
			<NavBar />
			<AsanaCarousel />
			
		</div>
		)
	}
}

export default ViewSequence