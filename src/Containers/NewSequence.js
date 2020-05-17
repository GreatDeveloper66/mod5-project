import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import AsanaCarousel from '../Components/AsanaCarousel'
import NavBar from '../Components/NavBar'
import { Container, Row } from 'reactstrap'

class NewSequence extends Component {
	constructor(props){
		super()
	}
	render(){
		return(
			<Container>
			<Row>
				<NavBar />
			</Row>
			<Row>
				<AsanaCarousel />
			</Row>
			<Row>
				footer
			</Row>
			</Container>
		)
	}
}

export default NewSequence