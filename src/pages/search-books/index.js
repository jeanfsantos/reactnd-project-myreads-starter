import React from "react";

import SearchBar from "@Components/search-bar/index";
import SearchList from "@Components/search-list/index";

class SearchBooks extends React.Component {
  render() {
    return (
      <div className="search-books">
        <SearchBar onHiddenSearchPage={this.props.handleHiddenSearchPage} />
        <SearchList />
      </div>
    );
  }
}

export default SearchBooks;
