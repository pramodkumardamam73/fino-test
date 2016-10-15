import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { browserHistory } from 'react-router'

const items = [
	{
		label: 'Login',
		path: '/login',
		state: ['unlogged']
	},
	{
		label: 'About Author',
		path: '/author',
		state: ['unlogged', 'logged']
	},
	{
		label: 'Start Test',
		path: '/test',
		state: ['logged']
	},
	{
		label: 'Logout',
		state: ['logged'],
		action: (props) => {
			props.onLogout()
		}
	}
]

const handleTap = (item, props) => {
	if(item.path){
		browserHistory.push(item.path)
	}

	if(item.action){
		item.action(props)
	}
	props.onRequestChange()
}

const SideMenu = (props) => {

	return (
		<Drawer 
			docked={false}
			{...props}>
			{
				items.map((item, index) => {
					if(item.state.indexOf(props.rootState.state) !== -1){
						return (
							<MenuItem key={index} onTouchTap={handleTap.bind(null, item, props)}>
								{item.label}
							</MenuItem>
						)
					} else {
						return null
					}
				})
			}
		</Drawer>
	)
}

export default SideMenu