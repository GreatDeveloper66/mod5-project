import React, { Component } from 'react';
import '../App.css';
import AsanaCard from './AsanaCard'
import { connect } from 'react-redux'
import { Container, Row } from 'reactstrap'

const mapStateToProps = state => {
	return {
			sequence: state.sequence,
			slide: state.slide
	}
}


class SequenceSlide extends Component {
	constructor(props){
		super()
	}
	
	renderCard = () => {
		const { id, englishname, sanskritname, duration, picurl } = this.props.sequence.asanas[this.props.slide]
		return <AsanaCard asana_id = {id} time = {duration} title = {sanskritname} subtitle = {englishname} image={picurl}  />
	}
	render(){
		return(
			<div>{this.renderCard()}</div>
		)
	}
}

export default connect(mapStateToProps,null)(SequenceSlide)