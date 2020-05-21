import React, { Component } from 'react';
import '../App.css';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row,Col } from 'reactstrap'
import AsanaCard from './AsanaCard'


class AsanaCategory extends Component {
	constructor(props){
		super()
	}
	
	renderAsanaCards = () => {
		if(this.props.name){
			return this.props.asanas.map(asana => <Col xs="3" key={asana.id}><AsanaCard title={asana.sanskritname} 
			                              subtitle={asana.englishname} image={asana.picurl} asana_id={asana.id} 
										  time={asana.duration} /></Col>)
		}
	}
	render(){
		return(
			<Container className="mt-3">
				<Row className="d-flex justify-content-center align-items-stretch">
					<div className="mt-3 mb-3"><h1 className="text-primary">{this.props.name}</h1></div>
				</Row>
					<Row className="d-flex justify-content-start align-items-stretch">
					{this.renderAsanaCards()}
				</Row>
			</Container>
		)
	}
}

export default AsanaCategory