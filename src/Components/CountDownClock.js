import React, { Component } from 'react';
import ReactCountdownClock from "react-countdown-clock";
import { Container, Row, Col,Card } from 'reactstrap'
 
class CountDownClock extends Component {
  constructor(props){
	super()
  }
  
  timesUp = () => {
		console.log('timesup')
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
		<Col xs={3}>
		
			
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
                     size={200}
                     onComplete={this.timeUp}
					 timeFormat="hms"/>
		</Card>
		</Col>
		</Row>
	  </Container>
    );
  }
}

export default CountDownClock