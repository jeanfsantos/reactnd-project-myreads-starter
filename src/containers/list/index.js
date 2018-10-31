import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BookList from '../../components/book-list/index';
import { fetchBooks, updateBooks } from '../../actions/books';

class List extends React.Component {
	static propTypes = {
		dispatch: PropTypes.func,
		books: PropTypes.array
	};

	componentDidMount() {
		this.props.dispatch(fetchBooks());
	}

	handleShelf = (book, shelf) => {
		this.props.dispatch(updateBooks(book, shelf));
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
							books={this.props.books.filter(
								book => book.shelf === 'currentlyReading'
							)}
							onChangeShelf={this.handleShelf}
						/>
						<BookList
							title="Want to Read"
							books={this.props.books.filter(
								book => book.shelf === 'wantToRead'
							)}
							onChangeShelf={this.handleShelf}
						/>
						<BookList
							title="Read"
							books={this.props.books.filter(
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

const mapStateToProps = state => ({
	books: state.books.books
});

export default connect(mapStateToProps)(List);
