import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import './styles.css'

class QuestionResult extends Component {
	render() {
		return (
			<div className="QuestionResult-container">
				<h4>{`${this.props.number}. ${this.props.question.label}`}</h4>
				<ul className="QuestionResult-option-list">
					{
						this.props.question.options.map((option, index) => 
							<li key={index} className={
								`QuestionResult-option 
								${this.props.question.answer === index && this.props.question.answer !== this.props.question.optedAnswer 
								? 'actual' 
								: this.props.question.optedAnswer === index && this.props.question.answer !== this.props.question.optedAnswer
								? 'opted'
								: this.props.question.optedAnswer === index && this.props.question.answer === this.props.question.optedAnswer
								? 'correct'
								: null
								}`}>
								{option.label}
								{
									this.props.question.answer === index
									?	<FontAwesome name='check' />
									: 	this.props.question.optedAnswer === index && this.props.question.optedAnswer !== this.props.question.answer
									?	<FontAwesome name='times' />
									: 	null
								}
							</li>
						)
					}
					{
						this.props.question.optedAnswer === null
						?
							<li className="QuestionResult-option opted">
								Unanswered
							</li>
						: 	null
					}
				</ul>
			</div>
		)
	}
}

export default QuestionResult