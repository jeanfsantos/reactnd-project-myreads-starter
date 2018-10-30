import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '@Api/BooksAPI';
import BookList from '@Components/book-list/index';

class List extends React.Component {
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
					return { ..._book, shelf };
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
					<Link to="/search">Add a book</Link>
				</div>
			</div>
		);
	}
}

export default List;
