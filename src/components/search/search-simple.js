import React from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';

export class SearchSimple extends React.Component {

  resetField(){
    document.getElementById('searchInput').value= "";
  }

  render() {

    return (
      <div className="simple-search-div">
        <button className="search-icon" onClick={() => this.props.onClick(document.getElementById('searchInput').value)}>
        <FontAwesome name='search' />
        </button>
        <input type="text" id="searchInput" />
        <button className="trash-icon" onClick={this.resetField}>
            <FontAwesome name='trash-alt' size='2x' />
        </button>
      </div>
    )
  }
}

export default connect()(SearchSimple);