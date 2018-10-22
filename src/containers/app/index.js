import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Search from '@Pages/search/index';
import List from '@Pages/list/index';
import './style.css';

class BooksApp extends React.Component {
	render() {
		return (
			<Router>
				<div className="app">
					<Route exact path="/" component={List} />
					<Route exact path="/search" component={Search} />
				</div>
			</Router>
		);
	}
}

export default BooksApp;
