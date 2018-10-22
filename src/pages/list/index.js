import React from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from '@Api/BooksAPI';
import BookList from '@Components/book-list/index';

class List extends React.Component {
	static propTypes = {
		handleShowSearchPage: PropTypes.func.isRequired
	};

	state = {
		books: []
	};

	componentDidMount() {
		BooksAPI.getAll().then(data => {
			this.setState({
				books: data
			});
		});
	}

	handleShelf = (book, shelf) => {
		BooksAPI.update(book, shelf).then(() => {
			const books = this.state.books.map(_book => {
				if (book.id === _book.id) {
					_book.shelf = shelf;
					return _book;
				}
				return _book;
			});
			this.setState({ books });
		});
	};

	render() {
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<BookList
							title="Currently Reading"
							books={this.state.books.filter(
								book => book.shelf === 'currentlyReading'
							)}
							onChangeShelf={this.handleShelf}
						/>
						<BookList
							title="Want to Read"
							books={this.state.books.filter(
								book => book.shelf === 'wantToRead'
							)}
							onChangeShelf={this.handleShelf}
						/>
						<BookList
							title="Read"
							books={this.state.books.filter(
								book => book.shelf === 'read'
							)}
							onChangeShelf={this.handleShelf}
						/>
					</div>
				</div>
				<div className="open-search">
					<a onClick={this.props.handleShowSearchPage}>Add a book</a>
				</div>
			</div>
		);
	}
}

export default List;
