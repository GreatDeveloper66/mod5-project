import React, { Component } from 'react';
import '../App.css';
import AsanaCard from './AsanaCard'
import { connect } from 'react-redux'
import { Container, Row } from 'reactstrap'

class SequenceSlide extends Component {
	constructor(props){
		super()
	}
	render(){
		return(
			<div>Sequence Slide</div>
		)
	}
}

export default SequenceSlide