import React, { Component } from 'react';
import '../App.css';
import { Container, Row, Button, Col } from 'reactstrap'
import { connect } from 'react-redux'
import MoveAsanaDownAction from '../actions/moveasanadown'
import MoveAsanaUpAction from '../actions/moveasanaup'

const mapDispatchToProps = dispatch => {
	return {
		moveasanaup: asana_id => {
			dispatch(MoveAsanaUpAction(asana_id))
		},
		moveasanadown: asana_id => {
			dispatch(MoveAsanaDownAction(asana_id))
		}
	}
}

const mapStateToProps = state => {
	return {
		asana_id: state.selectedasana,
		sequence: state.sequence
	}
}

class Arrows extends Component {
	constructor(props){
		super()
	}
	
	handleMoveDown = () => {
		const id = this.props.asana_id
		if(id === null) {
			return
		}
		if(id > 0){
			this.props.moveasanadown(id)
		}
	}
	
	handleMoveUp = () => {
		const id = this.props.asana_id
		if(id === null) {
			return
		}
		if(id < this.props.sequence.asanas.length - 1){
			this.props.moveasanaup(id)
		}
	}
	render(){
		return(
		<Container>
			<Row>
				<Col sm={1}>
					<Button size="lg" onClick={() => this.handleMoveDown()}>&#11013;</Button>
				</Col>
				<Col sm={10}>
				</Col>
				<Col sm={1}>
					<Button size="lg" onClick={() => this.handleMoveUp()}>&#10145;</Button>
				</Col>
				
			</Row>
		</Container>
		
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Arrows)