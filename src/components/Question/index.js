import React, { Component } from 'react'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import RaisedButton from 'material-ui/RaisedButton'
import './styles.css'

class Question extends Component {

	constructor() {
		super()
		this.state = {
			answer: null
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({answer: null})
	}

	_handleChange(event, answer){
		this.setState({answer})
	}

	render() {
		return (
			<div>
				<h2>{`${this.props.number}. ${this.props.qdata.label}`}</h2>

				<div>
					<RadioButtonGroup
						valueSelected={this.state.answer}
						name={`question${this.props.number}`}
						onChange={this._handleChange.bind(this)}>
						{
							this.props.qdata.options.map((option, index) => 
								<RadioButton
									label={option.label}
									key={index} 
									value={index} />
							)
						}
					</RadioButtonGroup>
				</div>

				<div className='Question-footer'>
					<RaisedButton label="Submit" primary={true} onClick={this.props.onSubmit.bind(null, this.state.answer)} />
				</div>

			</div>
		)
	}
}

export default Question