import React, { Component } from 'react';
import '../App.css';
import { Card, CardBody, CardTitle, CardSubtitle, CardImg, CardFooter,Button, CardHeader } from 'reactstrap'
import { connect } from 'react-redux'
import AddAsanaAction from '../actions/addasana'
import RemoveAsanaAction from '../actions/removeasana'
import SelectAsanaAction from '../actions/selectasana'
import ClearSelectedAsanaAction from '../actions/clearselectedasana'


const mapDispatchToProps = dispatch => {
	return {
		addasana: asana => {
			dispatch(AddAsanaAction(asana))
		},
		removeasana: asana => {
			dispatch(RemoveAsanaAction(asana))
		},
		selectasana: selectedasana => {
			dispatch(SelectAsanaAction(selectedasana))
		},
		clearselectedasana: () => {
			dispatch(ClearSelectedAsanaAction())
		}
	}
}


class AsanaCard extends Component {
	constructor(props){
		super()
	}
	
	cardStyle = () => ({
		cursor: 'pointer',
		fontFamily: 'Roboto',
		height: this.props.cardHeight
	})

	addAsana = () => {
	if(this.props.deleteable){
		return
	}
	const asan = {id: this.props.asana_id,englishname: this.props.subtitle, sanskritname: this.props.title,picurl: this.props.image,duration:this.props.time}
	this.props.addasana(asan)
	}
	
	renderCues = () => {
		if(this.props.cues){
			return <CardFooter className="text-info"><h6>{this.props.cues}</h6></CardFooter>
		}
		else 
			return null
	}
	
	handleRemoveCard = () => {
		this.props.clearselectedasana()
		this.props.removeasana(this.props.position)
	}
	
	handleMoveCard = () => {
		this.props.selectasana(this.props.position)
	}
	
	renderDeleteButton = () => {
			if(this.props.deleteable){
			return <CardHeader>
					<Button color="danger" onClick={this.handleRemoveCard}>X</Button>
				   </CardHeader>
			}
	}
	renderMoveButton = () => {
		if(this.props.deleteable){
			return <Button onClick={this.handleMoveCard}>&#119064;</Button>
		}
	}

	render(){
		return (
				<Card style={this.cardStyle()}>
				{this.renderDeleteButton()}
					<CardImg top width="100%" src={require(`../images/${this.props.image}.svg`)} alt="asana" />
					<CardBody onClick={this.addAsana} className="text-center">
						<CardTitle className="text-primary"><h5>{this.props.title}</h5></CardTitle>
						<CardSubtitle><h6>{this.props.subtitle}</h6></CardSubtitle>
							
							{this.renderMoveButton()}
					</CardBody>
					{this.renderCues()}
						
				</Card>
				)
	}
}

AsanaCard.defaultProps = {
	cardHeight: '400px'
}
export default connect(null,mapDispatchToProps)(AsanaCard)