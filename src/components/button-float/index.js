import React from 'react';
import PropTypes from 'prop-types';

class ButtonFloat extends React.Component {
	static propTypes = {
		onClickShowSearch: PropTypes.func.isRequired
	};

	render() {
		return (
			<div className="open-search">
				<a onClick={this.props.onClickShowSearch}>Add a book</a>
			</div>
		);
	}
}

export default ButtonFloat;
