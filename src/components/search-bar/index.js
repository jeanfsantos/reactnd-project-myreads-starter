import React from 'react';
import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';

class SearchBar extends React.Component {
	static propTypes = {
		onHiddenSearchPage: PropTypes.func.isRequired,
		onChangeInputSearch: PropTypes.func.isRequired
	};

	render() {
		return (
			<div className="search-books-bar">
				<a
					className="close-search"
					onClick={this.props.onHiddenSearchPage}
				>
					Close
				</a>
				<div className="search-books-input-wrapper">
					{/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
				*/}
					<DebounceInput
						minLength={2}
						debounceTimeout={300}
						onChange={this.props.onChangeInputSearch}
						placeholder="Search by title or author"
					/>
				</div>
			</div>
		);
	}
}

export default SearchBar;
