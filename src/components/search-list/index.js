import React from 'react';
import PropTypes from 'prop-types';
import BookItem from '@Components/book-item/index';

class SearchList extends React.Component {
	static propTypes = {
		books: PropTypes.array.isRequired
	};

	render() {
		return (
			<div className="search-books-results">
				<ol className="books-grid">
					{this.props.books.map(book => (
						<BookItem book={book} key={book.id} />
					))}
				</ol>
			</div>
		);
	}
}

export default SearchList;
