import React, { Component } from 'react';
import '../App.css';
import AsanaCarousel from '../Components/AsanaCarousel'
import NavBar from '../Components/NavBar'
import FooterBar from '../Components/FooterBar'
import SortBar from '../Components/SortBar'
import AsanaCard from '../Components/AsanaCard'
import { connect } from 'react-redux'
import ClearSequenceAction from '../actions/clearsequence'
import { Col} from 'reactstrap'
import AsanaCategories from '../Containers/AsanaCategories'

const mapStateToProps = state => {
  return {
    categories: state.categories,
	categorylabel: state.categorylabel,
	sortasanas: state.sortasanas
  }
}

const mapDispatchToProps = dispatch => {
	return {
		clearsequence: () => {
			dispatch(ClearSequenceAction())
		}
	}
}


class NewSequence extends Component {
	constructor(props){
		super()
	}
	
	componentDidMount() {
		this.props.clearsequence()
	}

	render(){
		return(
		<div>
			<NavBar />
			<FooterBar />
			<AsanaCarousel />
			<SortBar />
			<AsanaCategories />
			
		</div>
		)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(NewSequence)