import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import NavBar from '../Components/NavBar'
import FooterBarEdit from '../Components/FooterBarEdit.js'
import AsanaCategory from '../Components/AsanaCategory'
import { connect } from 'react-redux'
import AsanaCarouselDraggable from '../Components/AsanaCarouselDraggable'

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}


class EditDraggable extends Component {
	constructor(props){
		super()
	}
	renderCategories = () => {
		const categories = this.props.categories
		return categories.map(category => <AsanaCategory name={category.name} asanas={category.asanas} key={category.id} />)
	}

	render(){
		return(
		<div>
		
			<NavBar />
			<FooterBarEdit />
			{this.renderCategories()}
		</div>
		)
	}
}
export default connect(mapStateToProps,null)(EditDraggable)
