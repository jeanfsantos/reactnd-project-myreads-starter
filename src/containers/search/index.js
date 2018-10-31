import React from 'react';
import { DebounceInput } from 'react-debounce-input';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BookItem from '../../components/book-item/index';
import {
	fetchSearchBooks,
	updateSearchBook,
	cleanSearchBooks
} from '../../actions/books';

class Search extends React.Component {
	static propTypes = {
		dispatch: PropTypes.func,
		books: PropTypes.array,
		searchBooks: PropTypes.array,
		history: PropTypes.object
	};

	handleInputSearch = e => {
		this.props.dispatch(fetchSearchBooks(e.target.value));
	};

	handleShelf = (book, shelf) => {
		this.props.dispatch(updateSearchBook(book, shelf));
	};

	handleClick = () => {
		this.props.dispatch(cleanSearchBooks());
		this.props.history.push('/');
	};

	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<a className="close-search" onClick={this.handleClick}>
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
						{/*
							Antes de renderizar o BookItem, verifica se o livro esta na
							lista de livros da estante, caso encontre sera passado para
							o BookItem o livro da estante senão o livro da busca
						*/}
						{this.props.searchBooks.map(searchBook => {
							const book =
								this.props.books.find(
									book => book.id === searchBook.id
								) || searchBook;
							return (
								<BookItem
									book={book}
									key={book.id}
									onChangeShelf={this.handleShelf}
								/>
							);
						})}
					</ol>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	books: state.books.books,
	searchBooks: state.books.searchBooks
});

export default connect(mapStateToProps)(Search);
