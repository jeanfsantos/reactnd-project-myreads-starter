import React from 'react';
import Search from '@Pages/search/index';
import List from '@Pages/list/index';
import './style.css';

const showSearchPage = () => ({
	showSearchPage: true
});

const hiddenSearchPage = () => ({
	showSearchPage: false
});

class BooksApp extends React.Component {
	state = {
		/**
		 * TODO: Instead of using this state variable to keep track of which page
		 * we're on, use the URL in the browser's address bar. This will ensure that
		 * users can use the browser's back and forward buttons to navigate between
		 * pages, as well as provide a good URL they can bookmark and share.
		 */
		showSearchPage: false
	};

	render() {
		return (
			<div className="app">
				{this.state.showSearchPage ? (
					<Search
						handleHiddenSearchPage={() =>
							this.setState(hiddenSearchPage)
						}
					/>
				) : (
					<List
						handleShowSearchPage={() =>
							this.setState(showSearchPage)
						}
					/>
				)}
			</div>
		);
	}
}

export default BooksApp;
