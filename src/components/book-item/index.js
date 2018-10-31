import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const options = [
	{ value: 'move', displayName: 'Move to...' },
	{ value: 'currentlyReading', displayName: 'Currently Reading' },
	{ value: 'wantToRead', displayName: 'Want to Read' },
	{ value: 'read', displayName: 'Read' },
	{ value: 'none', displayName: 'None' }
];

class BookItem extends React.Component {
	static propTypes = {
		book: PropTypes.object,
		onChangeShelf: PropTypes.func,
		onCheckedItem: PropTypes.func
	};

	static defaultProps = {
		book: {}
	};

	onChangeSelect = e => {
		const value = e.target.value;
		if (value === 'move') {
			return;
		}
		this.props.onChangeShelf && this.props.onChangeShelf(this.props.book, value);
	};

	onChecked = () => {
		this.props.onCheckedItem && this.props.onCheckedItem(this.props.book);
	}

	render() {
		const {
			title,
			authors,
			imageLinks = { thumbnail: '' },
			shelf = 'none'
		} = this.props.book;
		return (
			<li>
				<div className="book" onClick={this.onChecked}>
					<div className="book-top">
						<div
							className="book-cover"
							style={{
								width: 128,
								height: 193,
								backgroundImage: imageLinks.thumbnail
									? `url("${imageLinks.thumbnail}")`
									: ''
							}}
						/>
						<div className={cx({ 'book-checked': this.props.book.checked })}></div>
						<div className="book-shelf-changer">
							<select
								onChange={this.onChangeSelect}
								defaultValue={shelf}
							>
								{options.map((opt, index) => (
									<option
										key={index}
										value={opt.value}
										{...(index === 0
											? { disabled: true }
											: {})}
									>
										{opt.displayName}
									</option>
								))}
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
