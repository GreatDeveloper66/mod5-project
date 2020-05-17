import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import AsanaCarousel from '../Components/AsanaCarousel'

class EditSequence extends Component {
	constructor(props){
		super()
	}
	render(){
		return(
			<AsanaCarousel />
		)
	}
}

export default EditSequence