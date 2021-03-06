import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Search from '../search/index';
import List from '../list/index';
import './style.css';

const BooksApp = () => (
	<Router>
		<div className="app">
			<Route exact path="/" component={List} />
			<Route exact path="/search" component={Search} />
		</div>
	</Router>
);

export default BooksApp;
