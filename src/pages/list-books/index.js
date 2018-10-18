import React from 'react';
import PropTypes from 'prop-types';

import BookItem from '@Components/book-item/index';
import ButtonFloat from '@Components/button-float/index';

class ListBooks extends React.Component {
	static propTypes = {
		handleShowSearchPage: PropTypes.func.isRequired,
		books: PropTypes.array.isRequired
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
									{this.props.books
										.filter(
											book =>
												book.shelf ===
												'currentlyReading'
										)
										.map(book => (
											<BookItem
												book={book}
												key={book.id}
											/>
										))}
								</ol>
							</div>
						</div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Want to Read</h2>
							<div className="bookshelf-books">
								<ol className="books-grid">
									{this.props.books
										.filter(
											book => book.shelf === 'wantToRead'
										)
										.map((book, index) => (
											<BookItem book={book} key={index} />
										))}
								</ol>
							</div>
						</div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Read</h2>
							<div className="bookshelf-books">
								<ol className="books-grid">
									{this.props.books
										.filter(book => book.shelf === 'read')
										.map((book, index) => (
											<BookItem book={book} key={index} />
										))}
								</ol>
							</div>
						</div>
					</div>
				</div>
				<ButtonFloat
					onClickShowSearch={this.props.handleShowSearchPage}
				/>
			</div>
		);
	}
}

export default ListBooks;
