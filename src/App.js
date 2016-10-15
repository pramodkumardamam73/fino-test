import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Pages from './components/Pages'
import { browserHistory } from 'react-router'

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			state: 'unlogged',
			user: null,
			questionSet: null
		}
	}

	_handleLogin(user) {
		this.setState({user, state: 'logged'})
		browserHistory.push('/test')
	}

	_handleLogout() {
		this.setState({user: null, state: 'unlogged'})
		browserHistory.push('/login')
	}

	_handleCompleteTest(questionSet) {
		this.setState({questionSet})
		browserHistory.push('/result')
	}

	render() {
		return (
			<MuiThemeProvider>
				<Pages 
					{...this.props}
					rootState={this.state}
					onSuccessLogin={this._handleLogin.bind(this)}
					onLogout={this._handleLogout.bind(this)}
					onCompleteTest={this._handleCompleteTest.bind(this)} />
			</MuiThemeProvider>
		)
	}

}

injectTapEventPlugin()

export default App
