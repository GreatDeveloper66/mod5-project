import React, { Component } from 'react';
import '../App.css';
import AsanaCard from '../Components/AsanaCard'
import { connect } from 'react-redux'
import { Container, Row, Col, Card,CardBody,CardTitle,CardText,Jumbotron } from 'reactstrap'
import Beginner_Sequence from '../images/Beginner_Sequence.jpg'


class YogaWorkoutScreen extends Component {
	constructor(props){
		super()
	}
	render(){
		return(
		<div style={{backgroundImage: `url(${require('../images/Beginner_Sequence.jpg')})`}}>
			asfsdaf
				Overlayed Text.
				<br />
				afsafa
				<br />
				afsafas
				<br />
				afsdfasdfa
				afsdfasdfsa
				afsdafas
				afdsaf
				{/*<Card>
					<CardBody>
						<CardTitle>
							Beginner's Sequence
						</CardTitle>
					</CardBody>
					<img src={require(`../images/Beginner_Sequence.jpg`)} alt="Beginner Sequence pic" />
					<CardBody>
						<CardText>
							60 minutes | Level 1
						</CardText>
					</CardBody>
				</Card>
				*/}
			
		</div>
		)
	}
}

export default YogaWorkoutScreen