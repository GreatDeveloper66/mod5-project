import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { Container, Row, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap'
import { withRouter } from 'react-router-dom'


class SavedSequences extends Component {
	constructor(props){
		super()
	}
	
	handleEdit = event => {
		event.preventDefault()
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
								
									<Input type="select" name="select" id="exampleSelect">
										<option>Saved Sequence 1</option>
										<option>Saved Sequence 2</option>
										<option>Saved Sequence 3</option>
										<option>Saved Sequence 4</option>
										<option>Saved Sequence 5</option>
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

export default withRouter(SavedSequences)