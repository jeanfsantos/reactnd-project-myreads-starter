import React from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from '@Api/BooksAPI';
import SearchBar from '@Components/search-bar/index';
import SearchList from '@Components/search-list/index';

class SearchBooks extends React.Component {
	static propTypes = {
		handleHiddenSearchPage: PropTypes.func.isRequired
	};

	state = {
		books: []
	};

	handleInputSearch = e => {
		BooksAPI.search(e.target.value).then((data = []) => {
			if (data.error) return;
			this.setState({
				books: data
			});
		});
	};

	render() {
		return (
			<div className="search-books">
				<SearchBar
					onHiddenSearchPage={this.props.handleHiddenSearchPage}
					onChangeInputSearch={this.handleInputSearch}
				/>
				<SearchList books={this.state.books} />
			</div>
		);
	}
}

export default SearchBooks;
