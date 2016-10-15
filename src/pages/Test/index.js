import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import randomSentence from 'random-sentence'
import Question from '../../components/Question'
import './styles.css'

const testGenerator = () => {
	let questions = []
	for(let i=0;i<5;i++){
		let question = {
			label: null,
			options: [],
			answer: null,
			optedAnswer: null
		}
		question.label = randomSentence({min: 6, max: 15})

		let numOptions = randomInt(2, 5)
		for(let j=0;j<numOptions;j++){
			let answer = {
				label: null
			}
			answer.label = randomSentence({min: 2, max: 5})
			question.options.push(answer)
		}

		question.answer = randomInt(0, numOptions)

		questions.push(question)
	}

	return questions
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

class Test extends Component {

	constructor(props) {
		super(props)

		if(props.rootState.state !== 'logged'){
			browserHistory.push('/login')
		}

		this.state = {
			questionSet: testGenerator(),
			currentQuestion: 0
		}
	}

	_handleSubmit(answer){
		let state = this.state
		state.questionSet[state.currentQuestion].optedAnswer = answer
		this.setState({state})
		if(state.currentQuestion+1 < state.questionSet.length){
			this._goToNextQuestion()
			return
		}
		this.props.onCompleteTest(this.state.questionSet)
	}

	_goToNextQuestion(){
		this.setState({currentQuestion: this.state.currentQuestion+1})
	}

	render() {
		return (
			<div className='Test-container'>
				<Question 
					{...this.state}
					qdata={this.state.questionSet[this.state.currentQuestion]}
					number={this.state.currentQuestion+1}
					onSubmit={this._handleSubmit.bind(this)} />
			</div>
		)
	}
}

export default Test