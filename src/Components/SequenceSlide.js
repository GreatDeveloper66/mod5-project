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
		return <AsanaCard cardHeight={'500px'} asana_id={id} subtitle={englishname} title={sanskritname} image={picurl} time={duration} cues={cues} />
	}
	
	render(){
		return(
		<div>
			<Container>
				<Row>
					<Col xs={4}>
					</Col>
					<Col xs={4}>
						<Card>
							<CardBody>
						{this.renderAsanaCard()}
							</CardBody>
							<CardFooter>
								<CountDownClock />
							</CardFooter>
							<CardFooter>
								 <Container>
									<Row>
										<Col sm={6} className="d-flex justify-content-center">
											<p className="text-success">Total Time Left</p>
										</Col>
										<Col sm={6} className="d-flex justify-content-center">
											<p className="text-info">Time left in Pose</p>
										</Col>
									</Row>
								</Container>
							</CardFooter>
						</Card>
					</Col>
					<Col xs={4}>
					</Col>
				</Row>
			</Container>
		</div>
		)
	}
}

export default connect(mapStateToProps,null)(SequenceSlide)