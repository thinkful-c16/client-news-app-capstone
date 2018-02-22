import React from 'react';
import SearchSimple from './search-simple.js';
import SearchAdvanced from './search-advanced.js';
// import { FontAwesome } from 'react-fontawesome';
import '../../styles/search.css';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     searchAdvanced: false
    }
    this.searchToggle = this.searchToggle.bind(this);
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

    let angleButton;
    if (this.state.searchAdvanced) {
      angleButton = <a className="search-options-icon" onClick={this.searchToggle}>
                      angle up goes here
                    </a>;
    } else {
      angleButton = <a className="search-options-icon" onClick={this.searchToggle}>
                      angle down goes here
                    </a>;
    }

    return (
      <div className="search-div">
      {this.state.searchAdvanced ? (
        <SearchAdvanced />
      ) : (
        <SearchSimple />
        )}
        {angleButton}
      </div>
    )

  }
}