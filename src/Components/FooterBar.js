import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { Container, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap'


class FooterBar extends Component {
	constructor(props){
		super()
	}
	
	handleSave = () => {
		console.log('save')
	}

	render(){
		return(
			<Container>
				<Row className="d-flex justify-content-end">
					<Form>
						<FormGroup row>
							<Label for="name" sm={2}>Name:</Label>
							<Input type="text" name="name" id="name" />
							<Button color="primary" onClick={this.handleSave} type="submit">SAVE</Button>
						</FormGroup>
					</Form>
					
					
				</Row>
		</Container>
		)
	}
}

export default FooterBar