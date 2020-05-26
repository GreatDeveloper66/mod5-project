import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Select from 'react-select'
import { Container, Row, Form, FormGroup, Col, Button, Label, Input, ButtonGroup } from 'reactstrap'
import SetCategoryLabelAction from '../actions/setcategorylabel'

const mapDispatchToProps = dispatch => {
	return {
		setcategorylabel: categorylabel => {
			dispatch(SetCategoryLabelAction(categorylabel))
		}
	}
}

const options = [
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
	
	render(){
		return(
				<Form>
					<FormGroup row>
						<Col sm={5}>
						</Col>
						<Col sm={2}>
								<Select
										value={this.state.selectedOption}
										onChange={this.handleChange}
										options={options}
										/>
						</Col>
						<Col sm={5}>
							 <FormGroup tag="fieldset">
        <legend>Sort Alphabetically</legend>
       <ButtonGroup size="lg">
  <Button>&#11015;</Button>
  <Button>&#8616;</Button>
  <Button>&#11014;</Button>
  
  
</ButtonGroup>
      </FormGroup>
						</Col>
					</FormGroup>
				</Form>			
								
						
		)
	}
}

export default connect(null,mapDispatchToProps)(SortBar)