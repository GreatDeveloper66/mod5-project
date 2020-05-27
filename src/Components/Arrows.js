import React, { Component } from 'react';
import '../App.css';
import { Container, Row, Button, Form, FormGroup, Label, Input, Col, ButtonGroup } from 'reactstrap'
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
		asana_id: state.selectedasana
	}
}

class Arrows extends Component {
	constructor(props){
		super()
	}
	
	render(){
		return(
		<Container>
			<Row>
				<Col sm={1}>
					<Button size="lg" onClick={() => this.props.moveasanadown(this.props.asana_id)}>&#11013;</Button>
				</Col>
				<Col sm={10}>
				</Col>
				<Col sm={1}>
					<Button size="lg" onClick={() => this.props.moveasanaup(this.props.asana_id)}>&#10145;</Button>
				</Col>
				
			</Row>
		</Container>
		
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Arrows)