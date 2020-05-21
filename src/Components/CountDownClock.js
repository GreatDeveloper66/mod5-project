import React, { Component } from 'react';
import ReactCountdownClock from "react-countdown-clock";
import { Container, Row, Col,Card } from 'reactstrap'
import { connect } from 'react-redux'
 
 
const mapStateToProps = state => {
		return {
			sequence: state.sequence
		}
	} 
 
class CountDownClock extends Component {
  constructor(props){
	super()
  }
 
 findDuration = () => {
		return this.props.sequence.asanas.reduce((sum,asana) => sum + asana.duration,0)*60
	}
	
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
                     onComplete={this.timeUp}
					 timeFormat="hms"/>
			</Card>
		</Col>
		
		<Col xs={3}>
		
		</Col>
		<Col xs={3}>
		
		</Col>
		<Col xs={3} className="d-flex justify-content-center align-items-center">
			<Card>
			<ReactCountdownClock seconds={60}
                     color="#444"
                     alpha={0.9}
                     size={100}
                     onComplete={this.timeUp}
					 timeFormat="hms"/>
		</Card>
		</Col>
		</Row>
	  </Container>
    );
  }
}

export default connect(mapStateToProps,null)(CountDownClock)