import React, { Component } from 'react';
import '../App.css';


const bannerStyle = {
		backgroundImage: `url(${require('../images/Beginner_Sequence.jpg')})`,
		backgroundSize: 'contain',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundAttachment: 'fixed',
		height: '500px',
		width: '100%'
	}

class YogaJumbotron extends Component {
	constructor(props){
		super()
	}
	render(){
		return(
			<div style={bannerStyle} className="d-flex justify-content-center align-items-center">
			<Container>
				<Row className="d-flex justify-content-center align-items-center">
					<h1>YOGA BEGINNER</h1>
				</Row>			
			<Row className="d-flex justify-content-center align-items-center">
			<h2>60 minutes | Level 1</h2>
			</Row>
			</Container>		
		</div>
		)
	}
}