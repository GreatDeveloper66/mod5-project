import React, { Component } from 'react';
import { Container, Row } from 'reactstrap'
import '../App.css';
import LoadSequenceAction from '../actions/loadsequence'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
	return {
		categories: state.categories
	}
}

const mapDispatchToProps = dispatch => {
	return {
		loadsequence: sequence => {
			dispatch(LoadSequenceAction(sequence))
		}
	}
}

class YogaJumbotron extends Component {
	constructor(props){
		super()
	}
	
	bannerStyle = () => {
		return ({
			backgroundImage: `url(${require(`../images/${this.props.img}.jpg`)})`,
			backgroundSize: 'contain',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			height: '500px',
			width: '100%',
			cursor: 'pointer'
		})
	}
	
	
	
	viewpreset = () => {
		const asana_names = this.props.asanas;	
		const asanarray = this.props.categories.map(category => category.asanas).flat()
		const preset_asanas = asana_names.map(asana_name => {
								return asanarray.find(asana => asana.sanskritname === asana_name)
								})
		
		this.props.loadsequence({id:null, name: this.props.name,asanas: preset_asanas}) 
		this.props.history.push('/sequences/view')
	}
	render(){
		return(
			<div style={this.bannerStyle()} className="d-flex justify-content-center align-items-center" onClick={this.viewpreset}>
			<Container>
				<Row className="d-flex justify-content-center align-items-center">
						<h1>{this.props.name}</h1>
				</Row>			
			</Container>		
		</div>
		)
	}
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(YogaJumbotron))