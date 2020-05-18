import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row } from 'reactstrap'
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap'

const Categories = ['flatiron','flatiron','flatiron']

class AsanaCategory extends Component {
	constructor(props){
		super()
	}
	render(){
		return(
			<Container className="mt-3">
				<Row className="d-flex justify-content-center align-items-stretch">
					<div className="mt-3 mb-3"><h1 className="text-primary">Category 1</h1></div>
				</Row>
			</Container>
		)
	}
}

export default AsanaCategory