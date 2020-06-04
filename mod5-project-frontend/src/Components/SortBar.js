import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import Select from 'react-select'
import { Form, FormGroup, Col, Button, ButtonGroup } from 'reactstrap'
import SetCategoryLabelAction from '../actions/setcategorylabel'
import SortAsanasAction from '../actions/sortasana'

const mapStateToProps = state => {
	return {
		sortasanas: state.sortasanas,
		categorylabel: state.categorylabel
	}
}

const mapDispatchToProps = dispatch => {
	return {
		setcategorylabel: categorylabel => {
			dispatch(SetCategoryLabelAction(categorylabel))
		},
		sortasanas: sort => {
			dispatch(SortAsanasAction(sort))
		}
	}
}

const options = [
  { value: '', label: '' },
  { value: 'All', label: 'All' },
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
  { value: 'seated', label: 'Seated' },
  { value: 'standing',label :'Standing'},
  { value: 'restorative', label: 'Restorative' },
  { value: 'hip opener', label: 'Hip Opener' },
  { value: 'prone', label: 'Prone' },
  { value: 'forward bend', label: 'Forward Bend' },
  { value: 'backward bend', label: 'Backward Bend' },
  { value: 'twist', label: 'Twist' },
  { value: 'balance', label: 'Balance'},
  { value: 'inversion', label: 'Inversion' },
  { value: 'salutations', label: 'Salutations'}
]
 
class SortBar extends Component {
	constructor(props){
		super(props)
		this.state = {
			selectedOption: options[0].value
		}
	}
	
	handleChange = selectedOption => {
		this.setState({selectedOption: selectedOption})
		this.props.setcategorylabel(selectedOption.value)
	}
	
	sortUp = () => {
		this.props.sortasanas("ZTOA")
	}
	
	sortDown = () => {
		this.props.sortasanas("ATOZ")
	}
	
	unSort = () => {
		this.props.sortasanas("US")
	}
	
	renderSortButtons = () => {
		if(this.props.categorylabel === 'All'){
			return <FormGroup tag="fieldset">
					
					<ButtonGroup size="lg">
						<Button id="atoz" onClick={this.sortDown}>&#11015;</Button>
						<Button id="unsorted" onClick={this.unSort}>&#8616;</Button>
						<Button id="ztoa" onClick={this.sortUp}>&#11014;</Button>
					</ButtonGroup>
				</FormGroup>
		}
	}
	
	render(){
		return(
				<div style={{backgroundColor: '#FF7F50', height: '55px'}} className="mt-5">
				<Form>
					<FormGroup row className="d-flex align-item-center justify-content-between">
						<Col sm={4} >
								<Select
										value={this.state.selectedOption}
										onChange={this.handleChange}
										options={options}
										/>
						</Col>
						<Col sm={6} className="d-flex justify-content-center">
							<h2 text="primary">SORT ASANAS</h2>
						</Col>
						<Col sm={2} className="d-flex justify-content-center">
							<ButtonGroup size="lg">
								<Button id="atoz" onClick={this.sortDown}>&#11015;</Button>
								<Button id="unsorted" onClick={this.unSort}>&#8616;</Button>
								<Button id="ztoa" onClick={this.sortUp}>&#11014;</Button>
							</ButtonGroup>
						</Col>
					</FormGroup>
				</Form>		
			</div>
		)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SortBar)