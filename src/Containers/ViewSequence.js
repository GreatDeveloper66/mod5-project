import React, { Component } from 'react';
import '../App.css';
import AsanaCarousel from '../Components/AsanaCarousel'
import NavBar from '../Components/NavBar'
import AsanaCategory from '../Components/AsanaCategory'

class ViewSequence extends Component {
	constructor(props){
		super()
	}
	render(){
		return(
			<div>
			<NavBar />
			<AsanaCarousel />
			<AsanaCategory />
			<footer>Footer</footer>
		</div>
		)
	}
}

export default ViewSequence