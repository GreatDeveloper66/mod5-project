import React, { Component } from 'react';
import '../App.css';
import { Container, Row, Button, Form, FormGroup, Col } from 'reactstrap'
import AddSequenceAction from '../actions/addsequence'
import UndoAsanaAction from '../actions/undoasanas'
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
		}
	}
}


class FooterBarEdit extends Component {
	constructor(props){
		super()
	}
	
	handleSave = event => {
		event.preventDefault()
		const sequence = this.props.sequence
		console.log(JSON.stringify(sequence))
		const user_id = this.props.profile.user.id
		const sequence_id = sequence.id
		const jwt = this.props.jwt
		const url = `http://localhost:5000/api/v1/users/${user_id}/sequences/${sequence_id}`
		const configObj = {
			method: 'PATCH',
			headers: {
				"Accept":"application/json",
				"Content-Type":"applications/json",
				Authorization: `Bearer ${jwt}`
			},
			body:JSON.stringify(sequence)
		}
		
		console.log('configObj:',configObj)
		
		fetch(url,configObj)
			.then(resp => resp.json())
			.then(data => console.log('returned data', data))
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