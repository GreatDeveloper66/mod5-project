import React, { Component } from 'react';
import '../App.css';
import { Container, Row, Button, Form, FormGroup, Col } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import LoadSequenceAction from '../actions/loadsequence'
import { connect } from 'react-redux'
import Select from 'react-select'
import DeleteSequenceAction from '../actions/deletesequence'


const mapStateToProps = state => {
	return {
		sequences:state.sequences,
		jwt: state.jwt,
		profile: state.profile
	}
}

const mapDispatchToProps = dispatch => {
	return {
		loadsequence: sequence => {
			dispatch(LoadSequenceAction(sequence))
		},
		deletesequence: sequencename => {
			dispatch(DeleteSequenceAction(sequencename))
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
	
	renderOptions = () => {
		const names = this.props.sequences.map(sequence => ({name: sequence.name, id: sequence.id}))
		return names.map(name => ({value: name.name, label: name.name, id: name.id}))
	}
	handleEdit = event => {
		if(this.state.selectedOption){
			event.preventDefault()
			this.findSequence()
			this.props.history.push('/sequences/edit')
		}
	}
	
	handleDelete = event => {
		const option = this.state.selectedOption
		if(option){
		event.preventDefault()
		const id = option.id
		this.props.deletesequence(id)
		this.setState({selectedOption: null})
		const jwt = this.props.jwt
		const configObj = {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${jwt}`
			}
		}
		
		fetch(`http://localhost:5000/api/v1/users/${this.props.profile.user.id}/sequences/${id}`,configObj)
			.then(resp => resp.json())
			.then(data => {
				this.props.history.push('/profile')
			})
		}
		
	}
		 
	
	
	findSequence = () => {
		const sequenceid = this.state.selectedOption.id
		const sequences = this.props.sequences
		const sequence = sequences.find(sequence => sequence.id === sequenceid)
		this.props.loadsequence(sequence)
	}
	
	handleView = event => {
		if(this.state.selectedOption){
			event.preventDefault()
			this.findSequence()
			this.props.history.push('/sequences/view')
		}
	}
	
	handleChange = selectedOption => {
		this.setState({selectedOption: selectedOption})
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
						<Col xs={12}>
							<Select
										value={this.state.selectedOption}
										onChange={this.handleChange}
										options={this.renderOptions()}
										/>
										</Col>
						</FormGroup>
						<FormGroup row>
							
							<Col sm={4}>
								<Button color="success" onClick={this.handleView}>VIEW</Button>
							</Col>
							<Col sm={4}>
								<Button color="primary" onClick={this.handleEdit}>EDIT</Button>
							</Col>
							<Col sm={4}>
								<Button color="danger" onClick={this.handleDelete}>DELETE</Button>
							</Col>
						</FormGroup>
					</Form>
					
					
				</Row>
		</Container>
		)
	}
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SavedSequences))