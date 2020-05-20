import React, { Component } from 'react';
import '../App.css';
import { Container, Row, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap'
import AddSequenceAction from '../actions/addsequence'
import UndoAsanaAction from '../actions/undoasanas'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
	return {
		sequence: state.sequence
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addsequence: sequence => {
			dispatch(AddSequenceAction(sequence))
		},
		undoasana: asana => {
			dispatch(UndoAsanaAction(asana))
		}
	}
}


class FooterBarEdit extends Component {
	constructor(props){
		super()
	}
	
	handleSave = event => {
		event.preventDefault()
		this.props.addsequence({id:null, name: this.props.sequence.name, asanas: this.props.sequence})
		this.props.history.push('/profile')
		
	}

	render(){
		return(
			<Container className="mt-3">
				<Row className="d-flex justify-content-end">
					<Form onSubmit={this.handleSave}>
						<FormGroup row>
							<Col sm={1}>
								<Button color="danger" onClick={() => this.props.undoasana()}>X</Button>
							</Col>
							<Col sm={2}>
							</Col>
							<Col sm={3}>
								<Button color="primary" type="submit">SAVE</Button>
							</Col>
						</FormGroup>
					</Form>
					
					
				</Row>
		</Container>
		)
	}
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(FooterBarEdit))