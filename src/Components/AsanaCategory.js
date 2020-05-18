import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row,Col } from 'reactstrap'
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import AsanaCard from './AsanaCard'


class AsanaCategory extends Component {
	constructor(props){
		super()
	}
	/*
	renderAsanaCards = () => {
		return this.props.asanas.map(asana => <Col xs="3"><AsanaCard title={asana.sanskritname} subtitle={asana.englishname} image={asana.picurl} /></Col>)
	}
	*/
	renderAsanaCards = () => {
		if(this.props.name){
			return this.props.asanas.map(asana => <Col xs="3"><AsanaCard title={asana.sanskritname} subtitle={asana.englishname} image={asana.picurl} /></Col>)
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