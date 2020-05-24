import React, { Component } from 'react';
import '../App.css';
import { Container, Row, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap'
import AddSequenceAction from '../actions/addsequence'
import UndoAsanaAction from '../actions/undoasanas'
import LoadUserSequencesAction from '../actions/loadusersequences'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'



const mapStateToProps = state => {
	return {
		sequence: state.sequence,
		profile: state.profile,
		jwt: state.jwt
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addsequence: sequence => {
			dispatch(AddSequenceAction(sequence))
		},
		undoasana: asana => {
			dispatch(UndoAsanaAction(asana))
		},
		loadusersequences: sequences => {
			dispatch(LoadUserSequencesAction(sequences))
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
		const jwt = this.props.jwt
		const sequence = {name:this.state.inputvalue,sequence:this.props.sequence}
		const configObj = {
			method: 'POST',
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
				Authorization: `Bearer ${jwt}`
			},
			body:JSON.stringify(sequence)
		}
		
		fetch(`http://localhost:5000/api/v1/users/${this.props.profile.user.id}/sequences`,configObj)
			.then(resp => resp.json())
			.then(data => this.props.loadusersequences(data))
		this.props.history.push('/profile')
	}


	render(){
		return(
			<Container className="mt-3">
				<Row className="d-flex justify-content-around">
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
		);
	}
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(FooterBar))