import React, { Component } from 'react'

import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import './styles.css'

class Login extends Component {

	constructor(props) {
		super(props)
		this.state = {
			error: null,
			name: ''
		}
	}

	_handleLogin() {
		if(this.state.name && this.state.name.length > 3) {
			this.setState({error: null})
			this.props.onSuccessLogin(this.state.name)
		} else {
			this.setState({error: "Enter valid name"})
		}
	}

	render() {
		return (
			<div className="Login-container">
				<Paper className="Login-panel">
					<h1>Get in!</h1>
					
					<TextField
						fullWidth={true}
						errorText={this.state.error}
						onChange={(event) => this.setState({name: event.target.value})}
						value={this.state.name}
						floatingLabelText="Your Name" />

					<br />

					<RaisedButton 
						fullWidth={true}
						label="Login" 
						onClick={this._handleLogin.bind(this)}
						primary={true} />
					
				</Paper>
			</div>
		)
	}
}

export default Login