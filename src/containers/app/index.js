import React from 'react';
import SearchBooks from '@Pages/search-books/index';
import ListBooks from '@Pages/list-books/index';
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
					<SearchBooks
						handleHiddenSearchPage={() =>
							this.setState(hiddenSearchPage)
						}
					/>
				) : (
					<ListBooks
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
