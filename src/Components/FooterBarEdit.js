import React, { Component } from 'react';
import '../App.css';
import { Container, Row, Button, Form, FormGroup, Col } from 'reactstrap'
import AddSequenceAction from '../actions/addsequence'
import UndoAsanaAction from '../actions/undoasanas'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import LoadUserSequencesAction from '../actions/loadusersequences'

const URL = process.env.REACT_APP_API_URL

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

class FooterBarEdit extends Component {
	constructor(props){
		super()
		this.state = {
			selectedOption: ''
		}
	}
	
	handleSave = event => {
		event.preventDefault()
		const sequence = this.props.sequence
		const user_id = this.props.profile.user.id
		const sequence_id = sequence.id
		const jwt = this.props.jwt
		const url = `${URL}/api/v1/users/${user_id}/sequences/${sequence_id}`
		const configObj = {
			method: 'PATCH',
			headers: {
				"Accept":"application/json",
				"Content-Type":"application/json",
				Authorization: `Bearer ${jwt}`
			},
			body:JSON.stringify(sequence)
		}
		fetch(url,configObj)
			.then(resp => resp.json())
			.then(data => {
				this.props.loadusersequences(data)
				this.props.history.push('/profile')
				})
	}
	
	handleChange = selectedOption => {
		this.setState({selectedOption: selectedOption})
	}

	render(){
		return(
			<Container className="mt-3">
				<Row className="d-flex justify-content-around">
					<Form onSubmit={this.handleSave}>
						<FormGroup row>
							<Col xs={6}>
							</Col>
							<Col xs={3}>
								<Button color="danger" onClick={() => this.props.undoasana()}>X</Button>
							</Col>
							<Col xs={3}>	
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