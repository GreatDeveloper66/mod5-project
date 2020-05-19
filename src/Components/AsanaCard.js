import React from 'react';
import '../App.css';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import { connect } from 'react-redux'
import AddAsanaAction from '../actions/addasana'

const mapDispatchToProps = dispatch => {
	return {
		addasana: asana => {
			dispatch(AddAsanaAction(asana))
		}
	}
}


const addAsana = () => {
	console.log('add asana')
}

const AsanaCard = props => 
				<Card>
					<CardBody onClick={addAsana}>
						<CardTitle>{props.title}</CardTitle>
						<CardSubtitle>{props.subtitle}</CardSubtitle>
					</CardBody>
						<img width="100%" src={require(`../images/${props.image}.svg`)} alt="asana"/>
				</Card>


export default connect(null,mapDispatchToProps)(AsanaCard)