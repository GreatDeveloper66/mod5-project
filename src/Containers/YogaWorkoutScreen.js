import React, { Component } from 'react';
import '../App.css';
import AsanaCard from '../Components/AsanaCard'
import { connect } from 'react-redux'
import { Container, Row, Col, Card,CardBody,CardTitle,CardText,Jumbotron } from 'reactstrap'
import Beginner_Sequence from '../images/Beginner_Sequence.jpg'




const bannerStyle = {
		backgroundImage: `url(${require('../images/Beginner_Sequence.jpg')})`,
		backgroundSize: 'contain',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundAttachment: 'fixed',
		height: '500px',
		width: '100%'
	}

class YogaWorkoutScreen extends Component {
	constructor(props){
		super()
	}
	
	
	render(){
		return(
		<div style={bannerStyle} className="d-flex justify-content-center align-items-center">
			<Container>
				<Row className="d-flex justify-content-center align-items-center">
			<h1>YOGA BEGINNER</h1>
			</Row>
			
			<Row className="d-flex justify-content-center align-items-center">
			<h2>60 minutes | Level 1</h2>
			</Row>
			</Container>		
			
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