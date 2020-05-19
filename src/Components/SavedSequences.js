import React, { Component } from 'react';
import '../App.css';
import { Container, Row, Button, Form, FormGroup, Input, Col } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import LoadSequenceAction from '../actions/loadsequence'
import { connect } from 'react-redux'
import Select from 'react-select'

const options = [
    {value: 'Sequence1', label: 'Sequence1'},
	{value: 'Sequence2', label: 'Sequence2'},
	{value: 'Sequence3', label: 'Sequence3'}
]

const mapStateToProps = state => {
	return {
		sequences:state.sequences
	}
}

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
		this.state = {
			selectedOption: null
		}

	}
	
	handleEdit = event => {
		event.preventDefault()
		this.findSequence()

		//find sequence with that name in the sequences file
		//load that sequence to sequence state
		this.props.history.push('/sequences/new')
	}
	
	handleDelete = event => {
		event.preventDefault()
		
	}
	
	findSequence = () => {
		const sequencename = this.state.selectedOption.value
		const sequences = this.props.sequences
		const sequence = sequences.find(sequence => sequence.name === sequencename)
		this.props.loadsequence(sequence.asanas)
	}
	
	handleView = event => {
		event.preventDefault()
		this.findSequence()
		this.props.history.push('/sequences/view')
	}
	
	handleChange = selectedOption => {
		this.setState({selectedOption: selectedOption}, () => console.log('option selected', this.state.selectedOption))
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
									<Select
										value={this.state.selectedOption}
										onChange={this.handleChange}
										options={options}
										/>
										{
											/*
									<Input type="select" name="select">
										<option>Sequence1</option>
										<option>Sequence2</option>
										<option>Sequence3</option>
									</Input>
									*/
										}
       
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SavedSequences))