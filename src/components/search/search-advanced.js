import React from 'react';
import { connect } from 'react-redux';
// import { FontAwesome } from 'react-fontawesome';

export class SearchAdvanced extends React.Component {

  render() {
    return (
      <div className="advanced-search-div">
        <a className="search-icon" onClick={() => this.props.onClick(document.getElementById('searchInput').value)}>
          search icon here
        </a>
        <input type="text" id="searchInput" />
        <select name="category" id="categoryDropdown">
          <option value="business">business</option> 
          <option value="entertainment">entertainment</option>
          <option value="general">general</option>
          <option value="health">health</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="technology">technology</option>
        </select>
      </div>
    )
  }
}

export default connect()(SearchAdvanced);