import React, { Component } from 'react';
import '../App.css';
import AsanaCarousel from '../Components/AsanaCarousel'
import NavBar from '../Components/NavBar'
import CountDownClock from '../Components/CountDownClock'
import SequenceSlide from '../Components/SequenceSlide'
import AsanaCard from '../Components/AsanaCard'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return {
			sequence: state.sequence,
			slide: state.slide
	}
}

class ViewSequence extends Component {
	constructor(props){
		super()
	}
	
	render(){
		return(
			<div>
			<NavBar />
			<SequenceSlide />
			<CountDownClock />
			
		</div>
		)
	}
}

export default connect(mapStateToProps,null)(ViewSequence)