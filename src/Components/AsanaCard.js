import React, { Component } from 'react';
import '../App.css';
import { Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, CardFooter } from 'reactstrap'
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
	const asan = {id: this.props.asana_id,englishname: this.props.subtitle, sanskritname: this.props.title,picurl: this.props.image,duration:this.props.time}
	this.props.addasana(asan)
	}
	
	renderCues = () => {
		if(this.props.cues){
			return <CardFooter><CardText><small>{this.props.cues}</small></CardText></CardFooter>
		}
		else 
			return null
	}

	render(){
		return (
				<Card style={{cursor:'pointer'}}>
					<CardImg top width="100%" src={require(`../images/${this.props.image}.svg`)} alt="asana" />
					<CardBody onClick={this.addAsana}>
						<CardTitle><small>{this.props.title}</small></CardTitle>
						<CardSubtitle><small>{this.props.subtitle}</small></CardSubtitle>
					</CardBody>
					{this.renderCues()}
						
				</Card>
				)
	}
}
export default connect(null,mapDispatchToProps)(AsanaCard)