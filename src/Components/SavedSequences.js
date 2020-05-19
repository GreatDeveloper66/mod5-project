import React, { Component } from 'react';
import '../App.css';
import { Container, Row, Button, Form, FormGroup, Input, Col } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import LoadSequenceAction from '../actions/loadsequence'
import { connect } from 'react-redux'


const mapDispatchToProps = dispatch => {
	return {
		loadsequence: sequence => {
			dispatch(LoadSequenceAction(sequence))
		}
	}
}

class SavedSequences extends Component {
	constructor(props){
		super()

	}
	
	handleEdit = event => {
		event.preventDefault()
		console.log(event.target.parentNode.parentNode)
		//find name selected in dropdown
		//find sequence with that name in current sequences
		//load that sequence to sequence state
		this.props.history.push('/sequences/edit')
	}
	
	handleDelete = event => {
		event.preventDefault()
		
	}
	
	handleView = event => {
		event.preventDefault()
		this.props.history.push('/sequences/view')
	}

	render(){
		return(
			<Container className="mt-3">
				<Row className="d-flex justify-content-center">
					<h2 className="text-primary">SAVED SEQUENCES</h2>
				</Row>
				
				<Row className="d-flex justify-content-center">
					<Form onSubmit={this.handleEdit}>
						<FormGroup row>
							<Col sm={6}>
								
									<Input type="select" name="select">
										<option>Sequence1</option>
										<option>Sequence2</option>
										<option>Sequence3</option>
									</Input>
       
							</Col>
							<Col sm={2}>
								<Button color="primary" onClick={this.handleView}>VIEW</Button>
							</Col>
							<Col sm={2}>
								<Button color="primary" onClick={this.handleEdit}>EDIT</Button>
							</Col>
							<Col sm={2}>
								<Button color="primary" onClick={this.handleDelete}>DELETE</Button>
							</Col>
						</FormGroup>
					</Form>
					
					
				</Row>
		</Container>
		)
	}
}

export default withRouter(connect(null,mapDispatchToProps)(SavedSequences))