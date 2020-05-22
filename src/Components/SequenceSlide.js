import React, { Component } from 'react';
import '../App.css';
import AsanaCard from './AsanaCard'
import { connect } from 'react-redux'
import { Container, Row, Col, Card,CardBody } from 'reactstrap'

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
		const { id, englishname, sanskritname, duration, picurl, cues } = this.props.sequence.asanas[this.props.slide]
		return <Container>
					<Row>
						<Col xs={4}>
						</Col>
						<Col xs={4} className="d-flex justify-content-center align-items-center">
							<AsanaCard asana_id = {id} time = {duration} title = {sanskritname} subtitle = {englishname} image={picurl}  />
						</Col>
						<Col xs={4}>
						</Col>
					</Row>
					<Row>
						<Col xs={4}>
						</Col>
						<Col xs={4} className="d-flex justify-content-center align-items-center">
							<Card>
								<CardBody>
								{cues}
								</CardBody>
							</Card>
						</Col>
						<Col xs={4}>
						</Col>
					</Row>
				</Container>
	}
	render(){
		return(
		<div>
			{this.renderCard()}
		</div>
		)
	}
}

export default connect(mapStateToProps,null)(SequenceSlide)