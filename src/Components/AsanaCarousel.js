import React, { Component } from 'react';
import '../App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AsanaCard from './AsanaCard'


const asanasarray = [
  ['Warrior1','Virabhadrasana A','yoga-30',1],
  ['Warrior2','Virabhadrasana B','yoga-11',1],
  ['Warrior3','Virabhadrasana C','yoga-17',1],
  ['Pigeon','Kapotasana','yoga-59',1],
  ['Forward Bend','Uttanasana','yoga-18',1],
  ['Mountain','Tadasana','yoga',1],
  ['Half Way Bend', 'Ardha Uttanasana','yoga-64',2],
  ['Chair','Utkatasana','yoga-1',1],
  ['Downward Dog','Adho Mukha Svanasana','yoga-61',3],
  ['Upward Dog','Urdhva Mukha Shavanasana','yoga-35',1],
  ['High Lunge','Ashta Chandrasana','yoga-30',2],
  ['Low Lunge','Anjaneyasana', 'yoga-27',2],
  ['Wide Stance Fold','Prasarita Padottanasana','yoga-24',3],
  ['Cobra','Bhujangasana','yoga-31',1],
  ['Triangle','Trikonasana','yoga-14',2],
  ['Revolved Triangle','Parivrtta Trikonasana','yoga-14',2],
  ['Childs Pose','Balasana','yoga-50',3],
  ['Pyramid Pose','Parsvottanasana','yoga-23',1],
  ['Sun Salutations A', 'Surya Namaskara A','yoga-2',3],
  ['Classical Sun Salutations','Surya Namaskara Classic','yoga-2',3],
  ['Sun Salutations B', 'Surya Namaskara B','yoga-2',3],
  ['Moon Salutations','Chandra Namaskara','yoga-2',3],
  ['Staff','Dandasana','yoga-52',1],
  ['Happy Baby','Ananda Balasana','yoga-88',2],
  ['Plough','Halasana','yoga-90',1],
  ['Shoulder Stand', 'Salamba Sarvagasana','yoga-80',3],
  ['Headstand','Salamba Shirshasana','yoga-70',3],
  ['Ear to Knee','Karnapidasana','yoga-89',2],
  ['Corpse','Savasana','yoga-41',4],
  ['Crossed Legged Seat','Bharadvajrasana','yoga-10',4],
  ['Extended Side Angle','Utthita Parsvakonasana','yoga-12',2],
  ['Revolved Side Angle','Parivrtta Parsvakonasana','yoga-12',2],
  ['Half Moon', 'Ardha Chandrasana','yoga-15',2],
  ['Cat','Marjaryasana','yoga-55',2],
  ['Cow','Bitilasana','yoga-56',2],
  ['Table','Bharmanasana','yoga-54',2],
  ['Eagle','Garudasana','yoga-72',3],
  ['Tree','Vrikshasana','yoga-4',2],
  ['Side Plank', 'Vasisthasana','yoga-21',1],
  ['Wheel', 'Urdhva Dhanurasana','yoga-73',1],
  ['Bridge', 'Setu Bandha Sarvangasana','yoga-36',1],
  ['Wide Leg Forward End', 'Prasarita Padottanasana','yoga-24',1],
  ['Upward Facing Plank','Pursvottanasana','yoga-77',1],
  ['Plank','Pursvottanasana','yoga-32',1],
  ['West Stretching','Paschimottanasana','yoga-53',1],
  ['Sage Marichi Pose A','Marichyasana A','yoga-95',2],
  ['Sage Marichi C','Marichyasana C','yoga-95',2],
  ['Boat','Navasana','yoga-85',2],
  ['Lotus', 'Padmasana','yoga-10',3]
]




const responsive = {
		desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
		slidesToSlide: 3 // optional, default to 1.
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
	
	
	renderCarouselCards = () => {
		return asanasarray.map((asana,index) => <div key={index}><AsanaCard title={asana[1]} subtitle={asana[0]} image={asana[2]} /></div>)	
	}
	render(){
		return (
				<Carousel
				swipeable={false}
				draggable={false}
				showDots={true}
				responsive={responsive}
				ssr={true} // means to render carousel on server-side.
				infinite={true}
				/*autoPlay={this.props.deviceType !== "mobile" ? true : false}*/
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
		
		)
	}
}

export default AsanaCarousel