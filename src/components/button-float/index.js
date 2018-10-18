import React from "react";

class ButtonFloat extends React.Component {
  render() {
    return (
      <div className="open-search">
        <a onClick={this.props.onClickShowSearch}>Add a book</a>
      </div>
    );
  }
}

export default ButtonFloat;
