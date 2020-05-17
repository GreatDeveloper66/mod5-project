import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import AsanaCarousel from '../Components/AsanaCarousel'
import NavBar from '../Components/NavBar'
import { Container, Row } from 'reactstrap'

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