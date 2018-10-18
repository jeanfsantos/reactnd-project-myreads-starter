import React from 'react';
import PropTypes from 'prop-types';

class BookItem extends React.Component {
	static propTypes = {
		book: PropTypes.object
	};

	static defaultProps = {
		book: {}
	};

	render() {
		const { title, authors, imageLinks } = this.props.book;
		return (
			<li>
				<div className="book">
					<div className="book-top">
						<div
							className="book-cover"
							style={{
								width: 128,
								height: 193,
								backgroundImage: `url("${
									imageLinks.thumbnail
								}")`
							}}
						/>
						<div className="book-shelf-changer">
							<select>
								<option value="move" disabled>
									Move to...
								</option>
								<option value="currentlyReading">
									Currently Reading
								</option>
								<option value="wantToRead">Want to Read</option>
								<option value="read">Read</option>
								<option value="none">None</option>
							</select>
						</div>
					</div>
					<div className="book-title">{title}</div>
					<div className="book-authors">
						{authors &&
							authors.reduce(
								(total, author) => `${total}, ${author}`
							)}
					</div>
				</div>
			</li>
		);
	}
}

export default BookItem;
