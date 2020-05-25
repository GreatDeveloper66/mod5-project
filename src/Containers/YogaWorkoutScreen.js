import React, { Component, Fragment } from 'react';
import '../App.css';
import AsanaCard from '../Components/AsanaCard'
import { connect } from 'react-redux'
import { Container, Row, Col, Card,CardBody,CardTitle,CardText,Jumbotron } from 'reactstrap'
import Beginner_Sequence from '../images/Beginner_Sequence.jpg'
import YogaJumbotron from '../Components/YogaJumbotron'
import NavBar from '../Components/NavBar'
import preset_sequences from '../json/preset_sequences.json'

class YogaWorkoutScreen extends Component {
	constructor(props){
		super()
	}
	
	renderJumbotrons = () => {
		return preset_sequences.map(sequence => {
													return <YogaJumbotron img = {sequence.img} name={sequence.name} asanas={sequence.asanas}/>
												}) 
	}
	
	render(){
		return(
		
		<Fragment>
			<NavBar />
			<div>
				{this.renderJumbotrons()}
			</div>
		</Fragment>
		)
	}
}

export default YogaWorkoutScreen