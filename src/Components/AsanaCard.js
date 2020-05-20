import React, { Component } from 'react';
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



class AsanaCard extends Component {
	constructor(props){
		super()
	}
	
	addAsana = () => {
	this.props.addasana({id: this.props.id,englishname: this.props.subtitle, sanskritname: this.props.title,picurl: this.props.image})
	}

	render(){
		return (
				<Card>
					<CardBody onClick={this.addAsana}>
						<CardTitle>{this.props.title}</CardTitle>
						<CardSubtitle>{this.props.subtitle}</CardSubtitle>
					</CardBody>
						<img width="100%" src={require(`../images/${this.props.image}.svg`)} alt="asana"/>
				</Card>
				)
	}
}
export default connect(null,mapDispatchToProps)(AsanaCard)