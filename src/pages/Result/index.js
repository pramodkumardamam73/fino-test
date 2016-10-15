import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import './styles.css'

import QuestionResult from '../../components/QuestionResult'
const PieChart = require("react-chartjs").Pie

class Result extends Component {

	constructor(props) {
		super(props)

		if(props.rootState.state !== 'logged'){
			browserHistory.push('/login')
		}
	}

	_getNumberOfCorrectAnswers() {
		let correctAnswers = this.props.rootState.questionSet.filter(question => question.optedAnswer === question.answer)
		return correctAnswers.length
	}

	_getPercent(){
		return (this._getNumberOfCorrectAnswers()/this.props.rootState.questionSet.length)*100
	}

	_getNumberOfUnAttemptedAnswers() {
		let answers = this.props.rootState.questionSet.filter(question => question.optedAnswer === null)
		return answers.length
	}

	render() {
		return (
			 <div className="Result-container">
				<h2>You have successfully completed the test!</h2>
				<p>
					Your score is &nbsp;
					<b>{`${this._getPercent()}%`}</b>
				</p>

				<PieChart data={[{
		            value: this._getNumberOfCorrectAnswers(),
		            color: "#2c9c69",
		            label: "Correct Answers"
		        },
		        {
		            value : this.props.rootState.questionSet.length - this._getNumberOfCorrectAnswers() - this._getNumberOfUnAttemptedAnswers(),
		            color : "#dbba34",
		            label : "Wrong Answers"
		        },
		        {
		            value : this._getNumberOfUnAttemptedAnswers(),
		            color : "#637b85",
		            label : "UnAttmpted"
		        }]} redraw />

				<div>
					{
						this.props.rootState.questionSet.map((question, index) => 
							<QuestionResult 
								key={index}
								number={index+1}
								question={question} />
						)
					}
				</div>
			</div>
		)
	}
}

export default Result