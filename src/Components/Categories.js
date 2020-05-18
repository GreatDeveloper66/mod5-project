import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap'

Categories = ['flatiron','flatiron','flatiron']

class AsanaCategory extends Component {
	constructor(props){
		super()
	}
	render(){
		return(
			Categories.map(category => <Row>{category}</Row>)
		)
	}
}