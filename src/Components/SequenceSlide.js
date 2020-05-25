import React, { Component } from 'react';
import '../App.css';
import AsanaCard from './AsanaCard'
import { connect } from 'react-redux'
import { Container, Row, Col, Card,CardBody, CardFooter } from 'reactstrap'
import CountDownClock from '../Components/CountDownClock'

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
	
	renderAsanaCard = () => {
		const { id, englishname, sanskritname, duration, picurl, cues } = this.props.sequence.asanas[this.props.slide]
		return <AsanaCard asana_id={id} subtitle={englishname} title={sanskritname} image={picurl} time={duration} cues={cues} />
	}
	
	render(){
		return(
		<div>
			<Container>
				<Row>
					<Col xs={5}>
					</Col>
					<Col xs={3}>
						<Card>
							<CardBody>
						{this.renderAsanaCard()}
							</CardBody>
							<CardFooter>
								<CountDownClock />
							</CardFooter>
						</Card>
					</Col>
					<Col xs={3}>
						
					</Col>
					<Col xs={2}>
					</Col>
				</Row>
			</Container>
		</div>
		)
	}
}

export default connect(mapStateToProps,null)(SequenceSlide)