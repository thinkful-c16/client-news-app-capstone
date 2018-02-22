import React from 'react';
import {FontAwesome} from 'react-fontawesome';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     searchAdvanced: false
    }
  }

  searchToggle() {
    if (this.state.searchAdvanced !== true) {
      this.setState({
        searchAdvanced: true
      })
    }
    else {
      this.setState({
        searchAdvanced: false
      })
    }
  }

  render() {
    return (
      <div className="search-div">
      {this.state.searchAdvanced ? (
        <SearchAdvanced />
      ) : (
        <SearchSimple />
        )}
      <a className="search-options-icon">
        <FontAwesome name="angle-down" />
      </a>
      </div>
    )

  }
}