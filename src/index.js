import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Login from './pages/Login'
import Test from './pages/Test'
import Result from './pages/Result'
import Author from './pages/Author'

ReactDOM.render(
  <Router history={browserHistory}>
  	<Route path="/" component={App}>
  		<IndexRoute component={Login} />
  		<Route path="login" component={Login} />
  		<Route path="test" component={Test} />
  		<Route path="result" component={Result} />
  		<Route path="author" component={Author} />
  	</Route>
  </Router>,
  document.getElementById('root')
);
