import React, { Component } from 'react';
import '../App.css';
import AsanaCarousel from '../Components/AsanaCarousel'
import NavBar from '../Components/NavBar'
import CountDownClock from '../Components/CountDownClock'
import SequenceSlide from '../Components/SequenceSlide'
import { UncontrolledTooltip } from 'reactstrap'




class ViewSequence extends Component {
	constructor(props){
		super()
	}
	
	bannerStyle = () => {
		return ({
			
			backgroundImage: `url(${require(`../images/Yogi_Class_A.jpg`)})`,
			/*backgroundColor: '#EAA724',*/
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			height: '100vh',
			width: '100%'
		})
  }
	
	render(){
		return(
			<div style = {this.bannerStyle()} href="#" id="author_credit">
			<NavBar />
			<SequenceSlide />
			{/*
			<UncontrolledTooltip placement="right" target="author_credit">
				Photo by Anupam Mahapatra on Unsplash
			</UncontrolledTooltip>
			*/}
			
		</div>
		)
	}
}

export default ViewSequence