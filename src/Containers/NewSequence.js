import React, { Component } from 'react';
import '../App.css';
import AsanaCarousel from '../Components/AsanaCarousel'
import NavBar from '../Components/NavBar'
import FooterBar from '../Components/FooterBar'
import AsanaCategory from '../Components/AsanaCategory'






class NewSequence extends Component {
	constructor(props){
		super()
	}
	render(){
		return(
		<div>
			<NavBar />
			<AsanaCarousel />
			<AsanaCategory />
			<FooterBar />
		</div>
		)
	}
}

export default NewSequence