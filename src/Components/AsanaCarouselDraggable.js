import React, { Component } from 'react';
import '../App.css';
import AsanaCard from './AsanaCard'
import { connect } from 'react-redux'
import { Container, Row } from 'reactstrap'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const mapStateToProps = state => {
  return {
    sequence: state.sequence
  }
}

class AsanaCarouselDraggable extends Component {
	constructor(props){
		super()
	}
	
	renderCarouselCards = () =>  {
		if(this.props.sequence.asanas){
			return this.props.sequence.asanas.map((asana,index) => <div key={index}><AsanaCard asana_id={asana.id} title={asana.sanskritname} 
			                                                        subtitle={asana.englishname} image={asana.picurl} time={asana.duration} /></div>)
		}
		else {
			return <div></div>	
		}
	}
	
	onDragEnd = () => {
		console.log('hello')
	}
	
	
	render(){
		return(<div>
				<DragDropContext onDragEnd={this.onDragEnd}>
					<Droppable droppableId="droppable" direction="horizontal">
						{this.renderCarouselCards()}
					</Droppable>
					
				</DragDropContext>
			</div>)
	}
}


export default connect(mapStateToProps, null)(AsanaCarouselDraggable)