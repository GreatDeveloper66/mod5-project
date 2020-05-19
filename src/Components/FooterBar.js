import React, { Component } from 'react';
import '../App.css';
import { Container, Row, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap'
import AddSequenceAction from '../actions/addsequence'
import UndoAsanaAction from '../actions/undoasanas'
import { connect } from 'react-redux'



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


class FooterBar extends Component {
	constructor(props){
		super()
		this.state = {
			inputvalue: ''
		}
	}
	
	handleChange = event => {
		event.preventDefault()
		this.setState({inputvalue: event.target.value})
	}
	
	
	handleSave = event => {
		event.preventDefault()
		this.props.addsequence({id:null, name: this.state.inputvalue, asanas: this.props.sequence})
		
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
								<Label for="name" sm={2}><p className="text-success">NAME:</p></Label>
							</Col>
							<Col sm={6}>
								<Input type="text" name="name" id="name" value={this.state.inputvalue} onChange={this.handleChange}/>
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

export default connect(mapStateToProps,mapDispatchToProps)(FooterBar)