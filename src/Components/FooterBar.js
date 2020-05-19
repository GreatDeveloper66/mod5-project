import React, { Component } from 'react';
import '../App.css';
import { Container, Row, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap'
/*import AddSequenceAction from '../actions/addsequence'*/

/*
const mapStateToProps = state => {
	return {
		sequence: state.sequence
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addsequence: sequence => {
			dispatch(AddSequenceAction(sequence))
		}
	}
}
*/

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
		
		
		console.log('save')
		
	}

	render(){
		return(
			<Container className="mt-3">
				<Row className="d-flex justify-content-end">
					<Form onSubmit={this.handleSave}>
						<FormGroup row>
							<Col sm={2}>
								<Label for="name" sm={2}><p className="text-success">NAME:</p></Label>
							</Col>
							<Col sm={7}>
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

export default FooterBar