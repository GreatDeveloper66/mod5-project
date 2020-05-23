import React, { Component } from 'react';
import { Container, Row } from 'reactstrap'
import '../App.css';

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
			width: '100%'
		})
	}
	
	render(){
		return(
			<div style={this.bannerStyle()} className="d-flex justify-content-center align-items-center">
			<Container>
				<Row className="d-flex justify-content-center align-items-center">
					<h1>{this.props.name}</h1>
				</Row>			
			</Container>		
		</div>
		)
	}
}

export default YogaJumbotron