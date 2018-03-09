import React from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';

export class SearchAdvanced extends React.Component {

  resetField(){
    document.getElementById('searchInput').value= "";
  }

  render() {
    return (
      <div className="advanced-search-div">
        <button className="search-icon" onClick={() => this.props.onClick(document.getElementById('searchInput').value, document.getElementById('categoryDropdown').value)}>
          <FontAwesome name='search' />
        </button>
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
        <button className="trash-icon" onClick={this.resetField}>
            <FontAwesome name='trash-alt' size='2x' />
        </button>
      </div>
    )
  }
}

export default connect()(SearchAdvanced);