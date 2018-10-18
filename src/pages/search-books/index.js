import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from '@Components/search-bar/index';
import SearchList from '@Components/search-list/index';

class SearchBooks extends React.Component {
	static propTypes = { handleHiddenSearchPage: PropTypes.func.isRequired };

	render() {
		return (
			<div className="search-books">
				<SearchBar
					onHiddenSearchPage={this.props.handleHiddenSearchPage}
				/>
				<SearchList />
			</div>
		);
	}
}

export default SearchBooks;
