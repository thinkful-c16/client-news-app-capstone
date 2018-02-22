import React from 'react';
import { connect } from 'react-redux';
// import { FontAwesome } from 'react-fontawesome';

export class SearchSimple extends React.Component {

  render() {
    return (
      <div className="simple-search-div">
        <a className="search-icon">
          search icon here
        </a>
        <input type="text" id="searchInput" />
      </div>
    )
  }
}

export default connect()(SearchSimple);