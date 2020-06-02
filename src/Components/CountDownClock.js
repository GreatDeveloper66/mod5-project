import React, { Component } from 'react';
import ReactCountdownClock from "react-countdown-clock";
import { Container, Row } from 'reactstrap'
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
  
 
 
findDuration = () => this.props.sequence.asanas.reduce((sum,asana) => sum + asana.duration,0)*60

findInterval = () => this.props.slide < this.props.sequence.asanas.length ? this.props.sequence.asanas[this.props.slide].duration * 60: null

	
  render() {
	
    return (
	  <Container>
		<Row className="d-flex justify-content-around">
		
			<div>
			<ReactCountdownClock seconds={this.findDuration()}
                     color="#444"
                     alpha={0.9}
                     size={100}
                     onComplete={() => console.log('complete')}
					 timeFormat="hms"/>
			</div>
		
		
		
		
		
			<div>
			<ReactCountdownClock key={this.props.slide} seconds={this.findInterval()}
                     color="#444"
                     alpha={0.9}
                     size={100}
                     onComplete={() => this.props.incslide()}
					 timeFormat="hms"/>
		</div>
		
		</Row>
	  </Container>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CountDownClock)