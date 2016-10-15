import React, { Component } from 'react'
import './styles.css'

class Author extends Component {
	render() {
		return (
			<div className="Author-container">
				<h2>Pramod Kumar</h2>
				<p>
					<ul>
						<li>+91 8500271382</li>
						<li>
							<a href="mailto:pramodkumar.damam73@gmail.com">
								pramodkumar.damam73@gmail.com
							</a>
						</li>
						<li>
							<a target="_blank" href="http://fb.com/pramodkumar.damam73">
								http://fb.com/pramodkumar.damam73
							</a>
						</li>
						<li>
							<a target="_blank" href="https://in.linkedin.com/in/pramod-kumar-1a135b74">
								https://in.linkedin.com/in/pramod-kumar-1a135b74
							</a>
						</li>
					</ul>
				</p>
			</div>
		)
	}
}

export default Author