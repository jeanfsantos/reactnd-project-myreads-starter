import React from 'react';
import PropTypes from 'prop-types';
import BookItem from '../book-item/index';

class BookList extends React.Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		books: PropTypes.array.isRequired,
		onChangeShelf: PropTypes.func.isRequired,
		onCheckedItem: PropTypes.func.isRequired
	};

	render() {
		const { title } = this.props;
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{title}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{this.props.books.map(book => (
							<BookItem
								book={book}
								key={book.id}
								onChangeShelf={this.props.onChangeShelf}
								onCheckedItem={this.props.onCheckedItem}
							/>
						))}
					</ol>
				</div>
			</div>
		);
	}
}

export default BookList;
