import React from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from '@Api/BooksAPI';
import BookItem from '@Components/book-item/index';

class ListBooks extends React.Component {
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
						<div className="bookshelf">
							<h2 className="bookshelf-title">
								Currently Reading
							</h2>
							<div className="bookshelf-books">
								<ol className="books-grid">
									{this.state.books
										.filter(
											book =>
												book.shelf ===
												'currentlyReading'
										)
										.map(book => (
											<BookItem
												book={book}
												key={book.id}
												onChangeShelf={this.handleShelf}
											/>
										))}
								</ol>
							</div>
						</div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Want to Read</h2>
							<div className="bookshelf-books">
								<ol className="books-grid">
									{this.state.books
										.filter(
											book => book.shelf === 'wantToRead'
										)
										.map(book => (
											<BookItem
												book={book}
												key={book.id}
												onChangeShelf={this.handleShelf}
											/>
										))}
								</ol>
							</div>
						</div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Read</h2>
							<div className="bookshelf-books">
								<ol className="books-grid">
									{this.state.books
										.filter(book => book.shelf === 'read')
										.map(book => (
											<BookItem
												book={book}
												key={book.id}
												onChangeShelf={this.handleShelf}
											/>
										))}
								</ol>
							</div>
						</div>
					</div>
				</div>
				<div className="open-search">
					<a onClick={this.props.handleShowSearchPage}>Add a book</a>
				</div>
			</div>
		);
	}
}

export default ListBooks;
