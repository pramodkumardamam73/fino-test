import React, { Component } from 'react'
import NavBar from '../../components/NavBar'

class Pages extends Component {

	render() {
		return (
			<div>
				<NavBar title="Finomena" {...this.props} />

				{React.cloneElement(this.props.children, {...this.props})}
			</div>
		)
	}
}

export default Pages