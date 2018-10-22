import React from 'react';
import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';
import * as BooksAPI from '@Api/BooksAPI';
import BookItem from '@Components/book-item/index';

class Search extends React.Component {
	static propTypes = {
		handleHiddenSearchPage: PropTypes.func.isRequired
	};

	state = {
		books: []
	};

	handleInputSearch = e => {
		BooksAPI.search(e.target.value).then((data = []) => {
			if (data.error) {
				return;
			}
			this.setState({ books: data });
		});
	};

	handleShelf = (book, shelf) => {
		BooksAPI.update(book, shelf).then(() => {
			const books = this.state.books.filter(
				_book => book.id !== _book.id
			);
			this.setState({ books });
		});
	};

	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<a
						className="close-search"
						onClick={this.props.handleHiddenSearchPage}
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
							onChange={this.handleInputSearch}
							placeholder="Search by title or author"
						/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{this.state.books.map(book => (
							<BookItem
								book={book}
								key={book.id}
								onChangeShelf={this.handleShelf}
							/>
						))}
					</ol>
				</div>
			</div>
		);
	}
}

export default Search;
