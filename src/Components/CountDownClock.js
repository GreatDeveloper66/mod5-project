import React, { Component } from 'react';
import ReactCountdownClock from "react-countdown-clock";
import { Container, Row, Col,Card } from 'reactstrap'
import { connect } from 'react-redux'
import IncSlideAction from '../actions/incslide'

const mapDispatchToProps = dispatch => {
	return {
		incslide:() => dispatch(IncSlideAction())
	}
}

 
const mapStateToProps = state => {
		return {
			sequence: state.sequence,
			slide: state.slide
		}
	} 
 
class CountDownClock extends Component {
  constructor(props){
	super()
  }
  
 //map state slide to component
 //when done increment counter
 //get new duration
 //for other component render asana based on slide number
 
 
findDuration = () => this.props.sequence.asanas.reduce((sum,asana) => sum + asana.duration,0)*60

findInterval = () => this.props.sequence.asanas[this.props.slide].duration * 60

	
  render() {
    const settings = {
      count: 5432,
      border: true,
      showTitle: true,
      noPoints: true,
    };
	
	
	
    return (
	  <Container>
		<Row className="d-flex justify-content-center">
		<Col xs={3} className="d-flex justify-content-center align-items-center">
			<Card>
			<ReactCountdownClock seconds={this.findDuration()}
                     color="#444"
                     alpha={0.9}
                     size={150}
                     onComplete={() => console.log('complete')}
					 timeFormat="hms"/>
			</Card>
		</Col>
		
		<Col xs={3}>
		
		</Col>
		<Col xs={3}>
		
		</Col>
		<Col xs={3} className="d-flex justify-content-center align-items-center">
			<Card>
			<ReactCountdownClock key={this.props.slide} seconds={this.findInterval()}
                     color="#444"
                     alpha={0.9}
                     size={100}
                     onComplete={() => this.props.incslide()}
					 timeFormat="hms"/>
		</Card>
		</Col>
		</Row>
	  </Container>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CountDownClock)