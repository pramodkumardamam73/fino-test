import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import SideMenu from '../SideMenu'
import FlatButton from 'material-ui/FlatButton'

class NavBar extends Component {
	
	constructor() {
		super()
		this.state = {
			sideMenu: false
		}
	}

	_handleSideMenuToggle() {
		this.setState({sideMenu: !this.state.sideMenu})
	}

	render() {
		return (
			<div>

				<AppBar
					onLeftIconButtonTouchTap={this._handleSideMenuToggle.bind(this)}
			    	title={this.props.title}
			    	iconElementRight={this.props.rootState.state === 'logged' ? <FlatButton label={this.props.rootState.user} /> : null} />
			    <SideMenu 
			    	{...this.props}
			    	onRequestChange={this._handleSideMenuToggle.bind(this)}
			    	open={this.state.sideMenu} />
		    </div>
		)
	}
}

export default NavBar