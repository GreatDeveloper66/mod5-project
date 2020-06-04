import React, { Component } from 'react';
import '../App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AsanaCard from './AsanaCard'
import { connect } from 'react-redux'
const mapStateToProps = state => {
  return {
    sequence: state.sequence
  }
}

const responsive = {
		desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 6,
		slidesToSlide: 6 // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
		slidesToSlide: 2 // optional, default to 1.
	},
	mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

class AsanaCarousel extends Component {
	constructor(props){
		super()
	}
	
	
	renderCarouselCards = () =>  {
		if(this.props.sequence.asanas){
			return this.props.sequence.asanas.map((asana,index) => <div key={index}><AsanaCard position={index} asana_id={asana.id} title={asana.sanskritname} 
			                                                        subtitle={asana.englishname} image={asana.picurl} time={asana.duration} 
																	deleteable={this.props.deleteable ? true:false}/></div>)
		}
		else {
			return <div></div>	
		}
	}
	render(){
		return (
		<div style={{height: '400px'}}>
				<Carousel
				swipeable={false}
				draggable={false}
				showDots={true}
				responsive={responsive}
				ssr={true} // means to render carousel on server-side.
				infinite={true}
				autoPlay={false}
				autoPlaySpeed={1000}
				keyBoardControl={true}
				customTransition="all .5"
				transitionDuration={500}
				containerClass="carousel-container"
				removeArrowOnDeviceType={["tablet", "mobile"]}
				deviceType={this.props.deviceType}
				dotListClass="custom-dot-list-style"
				itemClass="carousel-item-padding-40-px"
				>
				{this.renderCarouselCards()}
				
			</Carousel>
		</div>
		)
	}
}

export default connect(mapStateToProps, null)(AsanaCarousel)